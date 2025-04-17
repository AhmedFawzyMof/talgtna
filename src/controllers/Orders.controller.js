const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
const Discount = require("../models/Discount.model");
const jwt = require("jsonwebtoken");
const Userid = require("../utils/getUserId");
const { getCurrentDay } = require("../utils/date");

const AddOrder = async (req, res) => {
  try {
    const {
      phone,
      spare_phone,
      street,
      building,
      floor,
      city,
      name,
      cart,
      method,
      discount,
    } = req.body;

    let token = null;

    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!phone || !cart || !method) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const userData = {
      phone,
      spare_phone,
      street,
      building,
      floor,
      city,
      name,
    };

    let userId = null;
    let favorites = 0;

    if (!token) {
      const user = await new Users(userData).add();
      userId = user.id;
      favorites = user.favorites;
      token = jwt.sign({ id: userId }, process.env.SECRET_KEY);
    } else {
      userId = Userid.UserId(token);
      const user = await new Users({ id: userId }).byId();
      favorites = user.favorites;
    }

    let usedDiscount;

    if (discount.code != "") {
      usedDiscount = await new Discount({
        user: userId,
        code: discount.code,
      }).check();
    }

    if (usedDiscount) {
      if (!usedDiscount.success) {
        return res.status(400).json({ error: usedDiscount.message });
      }
    }

    const {
      total,
      totalCoinsSpent,
      cart: processedCart,
    } = await new OrderProducts({
      products: cart,
    }).total();

    const order = await new Orders({
      order: {
        user: userId,
        method,
        discount,
        delivered: 0,
        processing: 0,
        city,
        created_at: getCurrentDay(),
        total,
      },
    }).add();

    await new OrderProducts({
      order: order.id,
      orderproducts: {
        products: processedCart,
      },
    }).add();

    await new Users({
      id: userId,
      coins: total,
    }).addCoins();

    await new Users({
      id: userId,
      coins_spent: totalCoinsSpent,
    }).removeCoins();

    return res.json({
      token,
      order: order.id,
      favorites,
      success: true,
    });
  } catch (error) {
    console.error("Order processing error:", error);
    res.status(500).json({
      error: "Failed to process order",
      message: error.message,
    });
  }
};

const GetOrders = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(403).send("Forbidden Access");
      return;
    }
    const user = Userid.UserId(token);

    const orders = await new Orders({ user: user }).getAll();
    const cities = await new Orders().getCities();

    async function enrichOrderWithProducts(order) {
      const products = await new OrderProducts({ order: order.id }).getAll();
      return { ...order, products };
    }

    const ordersArry = await Promise.all(orders.map(enrichOrderWithProducts));

    res.json({ orders: ordersArry, cities });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AddOrder,
  GetOrders,
};
