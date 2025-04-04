const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    account_type: { type: String, required: true },
    properties: {
      iban: { type: String, required: true },
    },
    credentials: {
      client_id: { type: String, required: true },
      client_secret: { type: String, required: true },
    },
  },
  { timestamps: true }
);

const AccountSchema = mongoose.model("Account", accountSchema);

module.exports = { AccountSchema };
