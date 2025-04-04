const ResponseService = require("../../src/services/responseService");
const constants = require("../../src/utilities/constants");
const messages = require("../../src/utilities/messages");
const accountsImplementation = require("../implementation/accountsImplementation");

class AccountsController {
  async createPayoutAccount(req, res) {
    try {
      const { account_type, properties, credentials } = req.body;

      if (
        !account_type ||
        !properties?.iban ||
        !credentials?.client_id ||
        !credentials?.client_secret
      ) {
        ResponseService.status = constants.CODE.BAD_REQUEST;
        return res
          .status(ResponseService.status)
          .send(
            ResponseService.responseService(
              constants.STATUS.ERROR,
              error.details[0].message,
              messages.INVALID_DATA
            )
          );
      }
      const accountData = { account_type, properties, credentials };
      const response = await accountsImplementation.createPayoutAccount(
        accountData
      );
      res.status(ResponseService.status).send(response);
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

module.exports = new AccountsController();
