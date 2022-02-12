const express = require("express");
const routes = require("./routes");
// below we are importing the connection to Sequelize from the connection.js file
const sequelize = require("./config/connection");
// Line 6 sets the port configuration, but Heroku and similar production environments cannot reserve the port 3001 for us and will provide a port dynamically. So we use the process.env.PORT variable to instruct the app that if the production environment provides a port for us, to use that one.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server. Sync meaning that Sequelize takes the models and connects them to associated db tables. {force: false}? If that is set to true it will drop and re-create all of the db tables on startup, needed when making changes to models.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
