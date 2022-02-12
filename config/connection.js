const Sequelize = require("sequelize");

require("dotenv").config();

//importing the base Sequelize class and using it to create a new connection to the database name, MySQL username, MySQL password as parameters, as seen on line 9.

// all of the data in the .env file will be made available at process.env.<ENVIRONMENT-VARIABLE-NAME>.

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
