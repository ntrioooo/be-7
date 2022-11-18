/**
 * @file contains entry point of controllers api v1 module
 * @author Fikri Rahmat Nurhidayat
 */

const carController = require("./carController");
const authController = require("./authController");
const handleGoogleLoginOrRegister = require('./handleGoogleLoginOrRegister')

module.exports = {
  carController,
  authController,
  handleGoogleLoginOrRegister
};
