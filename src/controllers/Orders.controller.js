const Users = require("../models/Users.model");
const Orders = require("../models/Orders.model");
const OrderProducts = require("../models/OrderProducts.model");
const jwt = require("jsonwebtoken");
const Userid = require("../utils/getUserId");
const { getCurrentDay } = require("../utils/date");

const AddOrder = async (req, res) => {
  const body = req.body;

  const userData = {
    phone: body.phone,
    spare_phone: body.spare_phone,
    street: body.street,
    building: body.building,
    floor: body.floor,
    city: body.city,
    name: body.name,
  };

  let token = "";

  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    const findUser = await new Users({
      phone: body.phone,
      spare_phone: body.spare_phone,
    }).find();

    if (!findUser.id) {
      const user = await new Users(userData).add();
      token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    } else {
      token = jwt.sign({ id: findUser.id }, process.env.SECRET_KEY);
    }
  }

  const orderTotal = async () => {
    return await new OrderProducts({ products: body.cart }).total();
  };

  const created_at = getCurrentDay();

  const { total, cart } = await orderTotal();

  const order = await new Orders({
    order: {
      user: Userid.UserId(token),
      method: body.method,
      discount: body.discount,
      delivered: 0,
      paid: 0,
      created_at: created_at,
      total: total,
    },
  }).add();

  await new OrderProducts({
    order: order.id,
    orderproducts: {
      products: cart,
    },
  }).add();

  res.json({ token: token, order: order.id });
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
