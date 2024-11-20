const router = require("express").Router();
const User = require("./models/Users");
const users = require("./data/Users");
const products = require("./data/Products");
const Product = require("./models/Products");
const AsynHandler = require("express-async-handler");
router.post(
  "/users",
  AsynHandler(async (req, res) => {
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder });
  })
);
router.post(
  "/products",
  AsynHandler(async (req, res) => {
    await Product.deleteMany({});
    const productSeeder = await Product.insertMany(products);
    res.send({ productSeeder });
  })
);
module.exports = router;
