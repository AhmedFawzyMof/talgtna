const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static("public"));
app.use(cors(corsOptions));

const indexRoutes = require("./routes/Index.route");
const companyRoutes = require("./routes/Companies.route");
const productRoutes = require("./routes/Products.route");
const categoryRoutes = require("./routes/Categories.route");
const orderRoutes = require("./routes/Orders.route");
const userRoutes = require("./routes/Users.route");
const adminRoutes = require("./routes/Admins.route");

app.use("/talgtna/api", indexRoutes);
app.use("/talgtna/api/company", companyRoutes);
app.use("/talgtna/api/products", productRoutes);
app.use("/talgtna/api/category", categoryRoutes);
app.use("/talgtna/api/order", orderRoutes);
app.use("/talgtna/api/user", userRoutes);
app.use("/talgtna/api/admin", adminRoutes);

app.get("*", (req, res, next) => {
  if (req.path.includes("api")) {
    return next();
  }

  if (req.path.startsWith("/admin")) {
    return res.sendFile(path.resolve(__dirname, "..", "public", "admin.html"));
  } else {
    res.sendFile(
      path.resolve(__dirname, "..", "public/talgtna/frontend", "index.html")
    );
  }
});

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
