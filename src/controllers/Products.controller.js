const Products = require("../models/Products.model");
const Offers = require("../models/Offers.model");
const Users = require("../models/Users.model");
const UserId = require("../utils/getUserId");

const ProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await new Products({ id }).byId({ coins: false });
    res.json({ product: product });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const CoinStore = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(401).send("Unauthorized");
      return;
    }

    const coins = await new Users({ id: UserId.UserId(token) }).getCoins();
    const products = await Products.coinstore();
    const offers = await Offers.getAll();
    res.json({ products: products, offers: offers, coins: coins.coins });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const ProductsBySearch = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let id;

    if (token) {
      id = UserId.UserId(token);
    }

    const query = req.body.query;
    const products = await new Products({ query, user: id }).bySearch();
    res.json({ products: products.products, favorites: products.favorites });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  ProductById,
  ProductsBySearch,
  CoinStore,
};
