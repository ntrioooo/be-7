/**
 * @file Manages database connection configuration.
 * @author Fikri Rahmat Nurhidayat
 */

const { Sequelize } = require("sequelize");

/** Destruct environment variable to get database configuration */
const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "1320",
  DB_HOST = "railway",
  DB_NAME = "cars-rent",
  DB_URI = "postgresql://postgres:2AVFdyrvldJ3wsRAtgmn@containers-us-west-95.railway.app:7609/railway",
  db = new Sequelize(DB_URI, {
    define: {
      timestamps: false
    }
  })
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_dev`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: "postgres",
  },
  db
};
