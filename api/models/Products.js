const mongoose = require("mongoose");
// const reviewSchema = mongoose.Schema({
//   name: { type: String, require: true },
//   rating: { type: Number, require: true, default: 0 },
//   comment: { type: String, require: true, default: 0 },
//   user: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
// });
const productSchema = mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  rating: { type: Number, require: true, default: 0 },
  price: { type: Number, require: true, default: 0 },
  numReview: { type: Number, require: true, default: 0 },
  countInStock: { type: String, require: true, default: 0 },
  // reviews: [reviewSchema],
});

module.exports = mongoose.model("Product", productSchema);
