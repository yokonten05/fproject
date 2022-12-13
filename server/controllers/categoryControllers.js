const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Category = require("../models/categoryModel");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.json(categories);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

module.exports = {
  getAllCategories,
};
