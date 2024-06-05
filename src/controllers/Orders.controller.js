const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
const jwt = require("jsonwebtoken");
const Userid = require("../utils/getUserId");

const AddOrder = async (req, res) => {
  try {
    const order = req.body;
    const authorizationHeader = req.headers.authorization;
    const authorizationToken = authorizationHeader?.split(" ")?.[1];
    let userId;
    let token;

    if (!authorizationHeader) {
      const userExists = await new Users().find({ phone: order.phone });

      if (!userExists.success) {
        const newUser = {
          name: order.name,
          phone: order.phone,
          spare_phone: order.spare_phone,
          street: order.street,
          building: order.building,
          floor: order.floor,
        };
        userId = await new Users(newUser).add().id;
        token = jwt.sign({ user: userId }, process.env.SECRET_KEY);
      }

      if (userExists.success) {
        userId = userExists.id;
        token = jwt.sign({ user: userId }, process.env.SECRET_KEY);
      }
    }

    if (authorizationToken) {
      userId = Userid.UserId(authorizationToken);
    }

    const verifyCoupons = await new Users({
      id: userId,
      coupon: order.discount,
    }).verifyCoupons();

    if (verifyCoupons.success) {
      order["discount"] = verifyCoupons.coupons;
    }

    const newOrder = {
      user: userId,
      city: order.city,
      method: order.method,
      discount: order.discount,
    };

    const createdOrder = await new Orders(newOrder).add();

    if (!createdOrder.success) {
      res.status(500).send("Failed to create order");
    }

    await Promise.all(
      order.cart.map(async ({ id, quantity }) => {
        await new OrderProducts({
          order: createdOrder.id,
          product: id,
          quantity,
        }).add();
      })
    );

    res.status(200).json({ success: true, token, order: createdOrder.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
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
