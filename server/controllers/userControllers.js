const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    res.json(user);
  } catch (error) {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error(`User Already Exists`);
  }

  const user = await User.create({
    name,
    email,
    password,
    isAdmin,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error(`Error Occured!`);
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
      pic: user.pic,
    });
  } else {
    res.status(400);
    throw new Error(`Invalid Email or Password!`);
  }
});

module.exports = { getUserById, registerUser, authUser };
