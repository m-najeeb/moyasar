const { AccountSchema } = require("../models/accountsModel");

class AccountsQueries {
  async createPayoutAccount(data) {
    const account = new AccountSchema(data);
    return await account.save();
  }
}

module.exports = new AccountsQueries();
