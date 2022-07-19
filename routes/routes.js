const express = require("express");
// how to call router function
const Routes = express.Router();
// import proccess from controller
const userProccess = require("../controller/users/user");
const middleProccess = require("../controller/middleware/middleware");

Routes.get("/user", userProccess.user)
Routes.post("/form", userProccess.form);
Routes.get("/form", userProccess.formGet);

Routes.use("/", middleProccess.errorPage);
// then exported
module.exports = Routes;
