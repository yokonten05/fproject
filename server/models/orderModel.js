const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: Object,
      required: true,
    },
    senderTel: {
      type: String,
      required: true,
    },
    senderFirstName: {
      type: String,
      required: true,
    },
    senderLastName: {
      type: String,
      required: true,
    },
    senderAddress: {
      type: String,
      required: true,
    },
    beneficiaryTel: {
      type: String,
      required: true,
    },
    beneficiaryFirstName: {
      type: String,
      required: true,
    },
    beneficiaryLastName: {
      type: String,
      required: true,
    },
    beneficiaryAddress: {
      type: String,
      required: true,
    },
    beneficiarySubdistrict: {
      type: String,
      required: true,
    },
    beneficiaryDistrict: {
      type: String,
      required: true,
    },
    beneficiaryCountry: {
      type: String,
      required: true,
    },
    beneficiaryPostcode: {
      type: String,
      required: true,
    },
    cartItems: { type: Array, default: [] },
    status: {
      type: String,
      require: true,
    },
    expireTime: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
