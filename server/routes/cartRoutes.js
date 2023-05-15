const express = require("express");
const router = express.Router();
const {
  getAllCarts,
  getCartById,
  addCart,
  //   updateCart,
  deleteCart,
} = require("../controllers/cartController");

router.get("/", getAllCarts);
router.route("/get").post(getCartById);
router.route("/").post(addCart);
// router.put("/:id", updateCart);
router.route("/delete").post(deleteCart);

module.exports = router;
