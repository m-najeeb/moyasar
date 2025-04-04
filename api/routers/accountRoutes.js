const { Router } = require("express");
const AccountsController = require("../controllers/accountsController");

const router = Router();

router.post("/payout-accounts", AccountsController.createPayoutAccount);

module.exports = router;
