const ResponseService = require("../../src/services/responseService");
const constants = require("../../src/utilities/constants");
const messages = require("../../src/utilities/messages");
const AccountsQueries = require("../../src/queries/accountsQueries");
const axios = require("axios");
require("dotenv").config();

const MOYASAR_API_KEY = process.env.MOYASAR_API_KEY;
const MOYASAR_BASE_URL = "https://api.moyasar.com/v1";

const authHeader = {
  Authorization: `Basic ${Buffer.from(`${MOYASAR_API_KEY}:`).toString(
    "base64"
  )}`,
};

class AccountsImplementation {
  async createPayoutAccount(data) {
    try {
      const account = await axios.post(
        `${MOYASAR_BASE_URL}/payout_accounts`,
        data,
        { headers: authHeader }
      );
      const response = await AccountsQueries.createPayoutAccount(account.data);
      if (response) {
        ResponseService.status = constants.CODE.OK;
        return ResponseService.responseService(
          constants.STATUS.SUCCESS,
          response,
          messages.SUCCESSFULLY_ADDED
        );
      }
    } catch (error) {
      ResponseService.status = constants.CODE.INTERNAL_SERVER_ERROR;
      return ResponseService.responseService(
        constants.STATUS.EXCEPTION,
        error.message,
        messages.EXCEPTION
      );
    }
  }
}

module.exports = new AccountsImplementation();
