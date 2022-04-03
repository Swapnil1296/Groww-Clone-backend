const {url} = require("inspector");
const mongoose = require("mongoose");

const popularFundsSchema = new mongoose.Schema(
  {
    Bank_logo_url: {type: String, required: true},
    nameOfBank: {type: String, required: true},

    Equity: {type: String, required: true},
    span: {type: String, required: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("populafunds", popularFundsSchema);
