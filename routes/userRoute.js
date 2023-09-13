const express = require("express");
const userController = require("../controllers/userController");
const bodyParser = require("body-parser");
const cors = require("cors")

const route = express();

route.use(bodyParser.urlencoded({
    extended: true
  }));
route.use(bodyParser.json());
route.use(cors());

route.post('/login', userController.userLogin);
route.post("/register", userController.createUser);







module.exports = route;
