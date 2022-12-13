const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

const addProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    countInStock,
    category,
    imageUrl,
    imageName,
  } = req.body;
  const product = await Product.create({
    name,
    price,
    description,
    countInStock,
    category,
    imageUrl,
    imageName,
  });

  if (product) {
    res.status(201).json({
      _id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      countInStock: product.countInStock,
      category: product.category,
      imageUrl: product.imageUrl,
      imageName: product.imageName,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
console.log(req.body)
  if (product) {
    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.countInStock = req.body.countInStock || product.countInStock;
    product.category = req.body.category || product.category;
    product.imageUrl = req.body.imageUrl || product.imageUrl;
    product.imageName = req.body.imageName || product.imageName;

    const update = await product.save();
    res.status(201).json({
      _id: update._id,
      name: update.name,
      price: update.price,
      description: update.description,
      countInStock: update.countInStock,
      category: update.category,
      imageUrl: update.imageUrl,
      imageName: update.imageName,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const product = await Product.find({
    _id: new mongoose.Types.ObjectId(id),
  }).deleteOne();

  if (product) {
    res.status(201).json({
      _id: id,
      ...product,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
};
