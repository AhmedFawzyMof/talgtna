const AdminModel = require("../models/Admins.model");
const UserModel = require("../models/Users.model");
const OrderModel = require("../models/Orders.model");
const OrderProductsModel = require("../models/OrderProducts.model");
const ProductModel = require("../models/Products.model");
const CategoryModel = require("../models/Categories.model");
const CompanyModel = require("../models/Companies.model");
const jwt = require("jsonwebtoken");

const AdminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await new AdminModel({ username, password }).login();

    if (admin) {
      const token = jwt.sign(
        { id: admin.id, delete_orders: admin.delete_orders, isAdmin: true },
        process.env.SECRET_KEY,
        {
          expiresIn: "1d",
        }
      );

      await new AdminModel({ id: admin.id }).updateLogin();

      res.json({ token: token });
    } else {
      res.status(403).send("Forbidden Access");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminDashboard = async (req, res) => {
  try {
    const activeCustomers = await UserModel.activeCustomers();
    const orders = await OrderModel.numberOfOrders();
    const overview = await AdminModel.overview();
    const top_products = await OrderProductsModel.topProducts();
    const latestOrders = await OrderModel.latestOrders();

    res.json({
      activeCustomers: activeCustomers,
      order: orders,
      overview: overview,
      top_products: top_products,
      latestOrders: latestOrders,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const search = req.query.search;
    const { totalProducts, products } = await ProductModel.adminProducts({
      limit,
      search,
    });
    const categories = await CategoryModel.getAll();
    const companies = await CompanyModel.getAll();
    const totalPages = Math.ceil(totalProducts / 50);
    res.json({ products: products, totalPages, categories, companies });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminEditProduct = async (req, res) => {
  try {
    const product = req.body;
    await new ProductModel(product).edit();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminDeleteProducts = async (req, res) => {
  try {
    const ids = req.body.ids;
    console.log(ids);
    await ProductModel.delete(ids);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminOrders = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const search = req.query.search;

    const { totalOrders, orders } = await OrderModel.adminOrders({
      limit,
      search,
    });

    const ordersIds = orders.map((order) => order.id);

    const products = await OrderProductsModel.adminOrderProducts(ordersIds);

    const totalPages = Math.ceil(totalOrders / 50);
    res.json({ orders: orders, totalPages, products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminEditOrders = async (req, res) => {
  try {
    const order = req.body;
    await new OrderModel(order).edit();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminUsers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const search = req.query.search;
    const { totalUsers, users } = await UserModel.adminUsers({ limit, search });
    const totalPages = Math.ceil(totalUsers / 50);
    res.json({ users: users, totalPages });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const AdminAddProducts = async (req, res) => {
  try {
    const product = req.body;
    const image = `/img/product/${req.file.originalname}`;

    Object.assign(product, { image });

    await new ProductModel(product).add();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AdminLogin,
  AdminDashboard,
  AdminProducts,
  AdminEditProduct,
  AdminDeleteProducts,
  AdminOrders,
  AdminEditOrders,
  AdminUsers,
  AdminAddProducts,
};
