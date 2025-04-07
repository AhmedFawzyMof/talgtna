const Users = require("../models/Users.model");
const Products = require("../models/Products.model");
const UserId = require("../utils/getUserId");

const AddToFav = async (req, res) => {
  try {
    const { product_id } = req.body;

    const user = req.headers.authorization.split(" ")[1];

    if (!user) {
      res.status(500).send("Internal Server Error");
      return;
    }
    const id = UserId.UserId(user);

    const isRegister = await new Users({ id: id }).byId();

    if (!isRegister) {
      res.status(403).send("Forbidden Access");
      return;
    }

    const inFavorite = await new Products({ id: product_id }).inFavorite({
      userId: id,
    });

    if (inFavorite) {
      res.json({ success: false });
      return;
    }

    const addToFav = await new Products({ id: product_id }).addFavorite({
      userId: id,
    });

    if (!addToFav.success) {
      res.status(500).send("Internal Server Error");
      return;
    }

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetFavorites = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(500).send("Internal Server Error");
      return;
    }

    const id = UserId.UserId(token);

    const products = await Products.byFavorite({ userId: id });

    res.json({ products: products });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const GetCoupons = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      res.status(500).send("Internal Server Error");
      return;
    }

    const id = UserId.UserId(token);
    const coupons = await new Users({ id: id }).coupons();
    res.json({ coupons: coupons });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  AddToFav,
  GetFavorites,
  GetCoupons,
};
