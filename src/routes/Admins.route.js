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

    if (req.url.includes("offers")) {
      dir = "./public/talgtna/img/offer";
    }

    cb(null, dir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    let name = path.basename(file.originalname, ext);
    if (req.url.includes("companies")) {
      name = req.body.name;
    }
    cb(null, `${name}${ext}`);
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
router.post(
  "/companies/delete",
  ValidateToken,
  controller.AdminDeleteCompanies
);
router.put("/companies/:id", ValidateToken, controller.AdminEditCompanies);

router.get("/categories", ValidateToken, controller.AdminCategories);
router.post("/categories", ValidateToken, controller.AdminAddCategories);
router.post(
  "/categories/delete",
  ValidateToken,
  controller.AdminDeleteCategories
);

router.get("/contacts", ValidateToken, controller.AdminContacts);
router.post("/contacts/delete", ValidateToken, controller.AdminDeleteContacts);
router.put("/contacts/:id", ValidateToken, controller.AdminEditContacts);

router.get("/offers", ValidateToken, controller.AdminOffers);
router.post(
  "/offers",
  ValidateToken,
  upload.single("image"),
  controller.AdminAddOffers
);
router.post("/offers/delete", ValidateToken, controller.AdminDeleteOffers);

router.get("/counters", ValidateToken, controller.AdminCounters);

module.exports = router;
