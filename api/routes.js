const accountRoutes = require("./routers/accountRoutes");

function setup(app) {
  app.use("/api/account", accountRoutes);
}

module.exports = setup;
