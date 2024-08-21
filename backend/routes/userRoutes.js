const express = require("express");
const signUpController = require("../controllers/signUpController");
const router = express.Router();
router.route('/signup').post(signUpController)
module.exports = router;
