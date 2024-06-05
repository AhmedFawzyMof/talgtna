const Products = require("../models/Products.model");
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
    const query = req.body.query;
    const products = await Products.bySearch({ query });
    res.json({ products: products });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  ProductById,
  ProductsBySearch,
};
