const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Cart = require("../models/cartModel");

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find({});

    res.json(carts);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

const getCartById = async (req, res) => {
  try {
    const { userId } = req.body;
    const cart = await Cart.findOne({
      userId: mongoose.Types.ObjectId(userId),
    });

    res.status(201).json(cart.cartItems);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

const addCart = asyncHandler(async (req, res) => {
  const { userId, productId, name, price, countInStock, imageUrl, qty, description } =
    req.body;

  const item = { productId, name, price, countInStock, imageUrl, qty, description };
  let user = await Cart.findOne({ userId: mongoose.Types.ObjectId(userId) });

  //Create new user cart
  if (!user) {
    let cart = await Cart.create({
      userId: mongoose.Types.ObjectId(userId),
      cartItems: [item],
    });

    if (cart) {
      res.status(201).json(cart.cartItems);
    } else {
      res.status(400);
      throw new Error(`Error Occured!`);
    }
  }

  //check exist item
  const existItem = user.cartItems.find(
    (el) => el.productId === item.productId
  );

  if (existItem) {
    let cart = await Cart.updateOne(
      {
        userId: mongoose.Types.ObjectId(userId),
        "cartItems.productId": productId,
      },
      { $set: { "cartItems.$": item } }
    );
    console.log(cart);
    if (cart) {
      res.status(201).json(cart);
    } else {
      res.status(400);
      throw new Error(`Error Occured!`);
    }
  } else {
    let cart = await Cart.updateOne(
      { userId: mongoose.Types.ObjectId(userId) },
      { $push: { cartItems: item } }
    );
    console.log(cart);
    if (cart) {
      res.status(201).json(cart);
    } else {
      res.status(400);
      throw new Error(`Error Occured!`);
    }
  }
});

// const updateProduct = asyncHandler(async (req, res) => {
//   const product = await Cart.findById(req.params.id);
//   console.log(req.body);
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

const deleteCart = asyncHandler(async (req, res) => {
  const { productId, userId } = req.body;

  const cart = await Cart.updateOne(
    { userId: mongoose.Types.ObjectId(userId) },
    { $pull: { cartItems: { productId: productId } } }
  );

  if (cart) {
    res.status(201).json({
      userId: userId,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

module.exports = {
  getAllCarts,
  getCartById,
  addCart,
  //   updateProduct,
  deleteCart,
};
