const express = require("express");
const router = express.Router();
const controller = require("../controllers/Admins.controller");
const { ValidateToken } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/talgtna/img/product");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // Get .png, .jpg, etc.
    cb(null, file.originalname + ext);
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
router.delete("/users/:id", ValidateToken, controller.AdminEditProduct);
router.put("/users", ValidateToken, controller.AdminDeleteProducts);

module.exports = router;
