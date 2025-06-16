const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
const Discount = require("../models/Discount.model");
const fs = require("fs");
const Userid = require("../utils/getUserId");
const axios = require("axios");
const { getCurrentDay } = require("../utils/date");
const jwt = require("jsonwebtoken");

const AddOrder = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { cart, method, discount } = req.body;
    const userData = await new Users({ id: Userid.UserId(token) }).getUser();
    let usedDiscount;

    if (discount.code != "") {
      usedDiscount = await new Discount({
        user: userData.id,
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
        user: userData.id,
        method,
        discount,
        delivered: 0,
        processing: 0,
        city: userData.city,
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
      id: userData.id,
      coins: total,
    }).addCoins();

    await new Users({
      id: userData.id,
      coins_spent: totalCoinsSpent,
    }).removeCoins();

    return res.json({
      order: order.id,
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

const CompleteOrder = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const body = req.body;

    if (!token) {
      res.status(403).json({
        success: false,
        message: "Please Fill order data to complete order",
      });
      return;
    }
    const orderDetailsCookie = req.cookies.order_ditails;

    const orderDetails = jwt.decode(orderDetailsCookie.token);
    const reqId = parseInt(body.id);

    console.log(orderDetails);
    let usedDiscount;

    if (orderDetails.discount.code != "") {
      usedDiscount = await new Discount({
        user: orderDetails.user,
        code: orderDetails.discount.code,
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
      products: orderDetails.cart,
    }).total();

    const order = await new Orders({
      order: {
        id: reqId,
        user: orderDetails.user,
        method: orderDetails.method,
        discount: orderDetails.discount,
        delivered: 0,
        processing: 0,
        city: orderDetails.city,
        created_at: getCurrentDay(),
        total,
        paymob_paid: JSON.parse(body.success),
      },
    }).add();

    await new OrderProducts({
      order: order.id,
      orderproducts: {
        products: processedCart,
      },
    }).add();

    await new Users({
      id: orderDetails.user,
      coins: total,
    }).addCoins();

    await new Users({
      id: orderDetails.user,
      coins_spent: totalCoinsSpent,
    }).removeCoins();
    res.json({ success: true, message: "لقد تم تقديم طلبك بنجاح" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Something went wrong" });
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

const CancelOrder = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(403).send("Forbidden Access");
      return;
    }

    const orderId = req.params.id;
    const user = Userid.UserId(token);

    await new Orders({ id: orderId, user: user }).cancel();

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetPaymentLink = async (req, res) => {
  try {
    console.log("hi");

    axios
      .get("https://app.fawaterk.com/api/v2/getPaymentmethods", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 8ea068023fbd08af92e9d4b2e97266fd0366fc50caad7dccfe`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    res.json({ link: "" });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const PaymobResponse = async (req, res) => {
  fs.writeFileSync("params.json", JSON.stringify(req.params));
  fs.writeFileSync("body.json", JSON.stringify(req.body));
  res.json({ status: 200, message: "ok" });
};

module.exports = {
  AddOrder,
  GetOrders,
  CancelOrder,
  GetPaymentLink,
  PaymobResponse,
  CompleteOrder,
};
