const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  getCategoryById,
  addCategory,
  deleteCategory,
} = require("../controllers/categoryControllers");

router.get("/", getAllCategories);
// router.get("/:id", getCategoryById);
// router.route("/").post(addCategory);
// router.route("/delete").post(deleteCategory);

module.exports = router;
