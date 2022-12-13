const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  //   getCategoryById,
  addOrder,
  //   deleteCategory,
} = require("../controllers/orderControllers");

router.get("/", getAllOrders);
// router.get("/:id", getCategoryById);
router.route("/").post(addOrder);
// router.route("/delete").post(deleteCategory);

module.exports = router;
