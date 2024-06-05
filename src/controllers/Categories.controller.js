const Offers = require("../models/Offers.model");
const Categories = require("../models/Categories.model");
const Products = require("../models/Products.model");
const ProductByCategory = async (req, res) => {
  try {
    const name = req.params.name;
    const offers = await Offers.getAll();
    const categories = await Categories.getAll();
    const products = await new Products({
      category: name,
    }).byCategory();

    res.json({
      categories: categories,
      offers: offers,
      products: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  ProductByCategory,
};
