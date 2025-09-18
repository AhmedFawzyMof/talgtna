const express = require("express");
const router = express.Router();
const PromoterController = require("../controllers/Promoter.controller");

router.post("/", PromoterController.createPromoter);
router.get("/", PromoterController.getAllPromoters);
router.get("/promoter/:id", PromoterController.getPromoterById);
router.put("/promoter/:id", PromoterController.updatePromoter);
router.delete("/promoter/:id", PromoterController.deletePromoter);
router.post("/promoter/:code", PromoterController.incrementPromoterInstalls);

module.exports = router;
