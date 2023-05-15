const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});

    res.json(orders);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     res.json(product);
//   } catch (error) {
//     res.status(400);
//     throw new Error(`Error Occured!`);
//   }
// };

const addOrder = asyncHandler(async (req, res) => {
  const {
    userId,
    senderTel,
    senderFirstName,
    senderLastName,
    senderAddress,
    beneficiaryTel,
    beneficiaryFirstName,
    beneficiaryLastName,
    beneficiaryAddress,
    beneficiarySubdistrict,
    beneficiaryDistrict,
    beneficiaryCountry,
    beneficiaryPostcode,
    cartItems,
    expireTime,
  } = req.body;

  const order = await Order.create({
    userId: mongoose.Types.ObjectId(userId),
    senderTel,
    senderFirstName,
    senderLastName,
    senderAddress,
    beneficiaryTel,
    beneficiaryFirstName,
    beneficiaryLastName,
    beneficiaryAddress,
    beneficiarySubdistrict,
    beneficiaryDistrict,
    beneficiaryCountry,
    beneficiaryPostcode,
    cartItems,
    expireTime,
    status: "pending",
  });

  if (order) {
    await Cart.updateOne(
      { userId: mongoose.Types.ObjectId(userId) },
      { $set: { cartItems: [] } }
    );

    res.status(201).json({
      _id: order._id,
      userId: order.userId,
      senderTel: order.senderTel,
      senderFirstName: order.senderFirstName,
      senderLastName: order.senderLastName,
      senderAddress: order.senderAddress,
      beneficiaryTel: order.beneficiaryTel,
      beneficiaryFirstName: order.beneficiaryFirstName,
      beneficiaryLastName: order.beneficiaryLastName,
      beneficiaryAddress: order.beneficiaryAddress,
      beneficiarySubdistrict: order.beneficiarySubdistrict,
      beneficiaryDistrict: order.beneficiaryDistrict,
      beneficiaryCountry: order.beneficiaryCountry,
      beneficiaryPostcode: order.beneficiaryPostcode,
      cartItems: order.cartItems,
      status: order.status,
      expireTime: order.expireTime,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

// const updateProduct = asyncHandler(async (req, res) => {
//   const product = await Product.findById(req.params.id);
// console.log(req.body)
//   if (product) {
//     product.name = req.body.name || product.name;
//     product.price = req.body.price || product.price;
//     product.description = req.body.description || product.description;
//     product.countInStock = req.body.countInStock || product.countInStock;
//     product.category = req.body.category || product.category;
//     product.imageUrl = req.body.imageUrl || product.imageUrl;
//     product.imageName = req.body.imageName || product.imageName;

//     const update = await product.save();
//     res.status(201).json({
//       _id: update._id,
//       name: update.name,
//       price: update.price,
//       description: update.description,
//       countInStock: update.countInStock,
//       category: update.category,
//       imageUrl: update.imageUrl,
//       imageName: update.imageName,
//     });
//   } else {
//     res.status(400);
//     throw new Error(`Error Occured!`);
//   }
// });

// const deleteProduct = asyncHandler(async (req, res) => {
//   const { id } = req.body;

//   const product = await Product.find({
//     _id: new mongoose.Types.ObjectId(id),
//   }).deleteOne();

//   if (product) {
//     res.status(201).json({
//       _id: id,
//       ...product,
//     });
//   } else {
//     res.status(400);
//     throw new Error(`Error Occured!`);
//   }
// });

module.exports = {
  getAllOrders,
  //   getProductById,
  addOrder,
  //   updateProduct,
  //   deleteProduct,
};
