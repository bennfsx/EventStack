const db = require("../db/db");
const bcrypt = require("bcrypt");

const createUsers = async (req, res) => {
  try {
    const result = await db.query("insert into users");
  } catch (error) {
    console.log(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const result = await db.query("select * from users");
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUsers,
};
