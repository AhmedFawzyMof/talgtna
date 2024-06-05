const express = require("express");
const router = express.Router();
const controller = require("../controllers/Products.controller");

router.get("/:id", controller.ProductById);
router.post("/search", controller.ProductsBySearch);

module.exports = router;
