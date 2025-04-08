const express = require("express");
const router = express.Router();
const controller = require("../controllers/Admins.controller");
const { ValidateToken } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = "./public/talgtna/img/product";

    if (req.url.includes("companies")) {
      dir = "./public/talgtna/img/compony";
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get .png, .jpg, etc.
    cb(null, req.body.name + ext);
  },
});

const upload = multer({ storage });

router.post("/login", controller.AdminLogin);
router.get("/dashboard", ValidateToken, controller.AdminDashboard);

router.get("/products", ValidateToken, controller.AdminProducts);
router.put("/products/:id", ValidateToken, controller.AdminEditProduct);
router.put("/products", ValidateToken, controller.AdminDeleteProducts);
router.post(
  "/products",
  ValidateToken,
  upload.single("image"),
  controller.AdminAddProducts
);

router.get("/orders", ValidateToken, controller.AdminOrders);
router.put("/orders/:id", ValidateToken, controller.AdminEditOrders);

router.get("/users", ValidateToken, controller.AdminUsers);

router.get("/companies", ValidateToken, controller.AdminCompanies);
router.post(
  "/companies",
  ValidateToken,
  upload.single("image"),
  controller.AdminAddCompanies
);
router.delete("/companies", ValidateToken, controller.AdminDeleteCompanies);

module.exports = router;
