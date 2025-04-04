const mongoose = require("mongoose");

const payoutSchema = new mongoose.Schema(
  {
    source_id: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "SAR" },
    purpose: { type: String, required: true },
    comment: { type: String },
    destination: {
      name: { type: String, required: true },
      mobile: { type: String, required: true },
      type: { type: String, required: true },
      iban: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const PayoutSchema = mongoose.model("Payout", payoutSchema);
module.exports = { PayoutSchema };
