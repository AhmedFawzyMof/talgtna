const Companies = require("../models/Companies.model");
const Products = require("../models/Products.model");

const CompanyByName = async (req, res) => {
  try {
    const name = req.params.name;
    const company = await new Companies({ name: name }).byName();
    const products = await new Products({
      company: company.name,
    }).byCompany();

    res.json({ company: company, products: products });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  CompanyByName,
};
