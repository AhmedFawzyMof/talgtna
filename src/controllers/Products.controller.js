const Products = require("../models/Products.model");
const UserId = require("../utils/getUserId");

const ProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const product = await new Products({ id }).byId();
    res.json({ product: product });
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
};
