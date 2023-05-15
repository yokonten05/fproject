const express = require("express");
const router = express.Router();
const {
  getUserById,
  registerUser,
  authUser,
} = require("../controllers/userControllers");

router.route("/").post(registerUser);
router.get("/:id", getUserById);
router.route("/login").post(authUser);

module.exports = router;
