const express = require("express");
const router = express.Router();

const controller = require("../controllers/Orders.controller");

router.post("/", controller.AddOrder);
router.get("/history", controller.GetOrders);
router.delete("/cancel/:id", controller.CancelOrder);

module.exports = router;
