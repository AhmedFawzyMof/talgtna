const Companies = require("../models/Companies.model");
const Products = require("../models/Products.model");
const UserId = require("../utils/getUserId");

const CompanyByName = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let id;

    if (token) {
      id = UserId.UserId(token);
    }

    const name = req.params.name;
    const company = await new Companies({ name: name }).byName();
    const products = await new Products({
      company: company.name,
      user: id,
    }).byCompany();

    res.json({
      company: company,
      products: products.products,
      favorites: products.favorites,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  CompanyByName,
};
