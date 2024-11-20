const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");

//connect db
mongoose
  .connect(process.env.MONGOOSEDB_URL)
  .then(() => console.log("db  connected"))
  .then((err) => {
    err;
  });
const productRoute = require("./routes/Product");
const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const orderRoute = require("./routes/Order");
app.use(express.json());
//db seeder routes
app.use("/api/seed", databaseSeeder);
// users routes
app.use("/api/users", userRoute);
//products routes
app.use("/api/products", productRoute);
//order routes
app.use("/api/orders", orderRoute);
app.listen(PORT || 8000, () => {
  console.log(`server listen on port ${PORT}`);
});

// BTjICgiqmgMRjuJN pass
// ameerahalqhtani1 username
//mongodb+srv://ameerahalqhtani1:BTjICgiqmgMRjuJN@cluster0.bowrz.mongodb.net/shoppy-website

// // api products test route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// //products id
// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((product) => product.id === req.params.id);
//   res.json(product);
// });
