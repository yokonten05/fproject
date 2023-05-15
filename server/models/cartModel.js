const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    userId: {
      type: Object,
      required: true,
    },
    cartItems: { type: Array, default: [] },
    // productId: {
    //   type: String,
    //   required: true,
    // },
    // name: {
    //   type: String,
    //   required: true,
    // },
    // price: {
    //   type: Number,
    //   required: true,
    // },
    // countInStock: {
    //   type: Number,
    //   required: true,
    // },
    // imageUrl: {
    //   type: String,
    //   required: true,
    // },
    // qty: {
    //   type: Map,
    //   of: Number,
    //   require: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", productSchema);

module.exports = Cart;
