const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productControllers");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.route("/").post(addProduct);
router.put("/:id", updateProduct);
router.route("/delete").post(deleteProduct);

module.exports = router;
