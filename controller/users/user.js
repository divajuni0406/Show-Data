const { Sequelize } = require("sequelize");
const db = require("../../models");
db.sequelize.sync();
const { users, profile } = require("../../models");

const form = async (req, res) => {
  let requestData = req.body;
  let dataUser = {
    username: requestData.username,
    password: requestData.password,
    email: requestData.email,
  };
  try {
    let userCreate = await users.create(dataUser);
    console.log(userCreate);
    let dataProfile = {
      user_id: userCreate.dataValues.id,
      first_name: requestData.first_name,
      last_name: requestData.last_name,
      full_name: requestData.full_name,
      address: requestData.address,
    };
    let createProfile = await profile.create(dataProfile);
    console.log(createProfile);
    res.send({
      message: `Successfull to Create Your Data`,
      resultData: createProfile,
      statusCode: 200,
    });
  } catch (error) {
    console.log(error);
  }
};

//latihan
const user = (req, res) => {
  res.render("user");
};
const formGet = async (req, res) => {
  let findUser = await users.findAll();
  let findProfile = await profile.findAll();

  findUser.forEach((user, index) => {
    let response = findProfile.filter((profile) => profile.user_id == user.dataValues.id);
    findUser[index] = Object.assign(user.dataValues, response[0].dataValues);
  });
  res.render("form", {
    findUser,
  });
};

exports.user = user;
exports.form = form;
exports.formGet = formGet;
