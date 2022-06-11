const express = require("express");
const router = express.Router();
const userHttpHandler = require("./user.http");

router.route('/')
  .get(userHttpHandler.getUserByUsername)
  .post(userHttpHandler.addUser);

exports.router = router;
