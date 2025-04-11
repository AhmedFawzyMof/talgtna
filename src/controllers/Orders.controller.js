const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
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

    let token = "";
    let userId = null;
    let favorites = 0;

    if (req.headers.authorization) {
      try {
        token = req.headers.authorization.split(" ")[1];
        userId = Userid.UserId(token);
        favorites = await new Users({ id: userId }).favorites();
      } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
      }
    } else {
      const foundUser = await new Users({ phone, spare_phone }).find();

      if (foundUser.id) {
        token = jwt.sign({ id: foundUser.id }, process.env.SECRET_KEY);
        userId = foundUser.id;
        favorites = foundUser.favorites;
      } else {
        const newUser = await new Users(userData).add();
        token = jwt.sign({ id: newUser.id }, process.env.SECRET_KEY);
        userId = newUser.id;
        favorites = newUser.favorites;
      }
    }

    const { total, cart: processedCart } = await new OrderProducts({
      products: cart,
    }).total();

    const order = await new Orders({
      order: {
        user: userId,
        method,
        discount,
        delivered: 0,
        processing: 0,
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

    return res.json({
      token,
      order: order.id,
      favorites,
      success: true,
    });
  } catch (error) {
    console.error("Order processing error:", error);
    return res.status(500).json({
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

    const ordersArry = await Promise.all(
      orders.map(async (order) => {
        const product = await new OrderProducts({
          order: order.id,
        }).getAll();

        return { ...order, products: product };
      })
    );

    res.json({ orders: ordersArry });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AddOrder,
  GetOrders,
};
