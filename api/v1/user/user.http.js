const userController = require("./user.controller");
const { to } = require("../../tools/to");

const addUser = async (req, res) => {
  const { name, username } = req.body;
  const [errorAddingUser, added] = await to(
    userController.addUser(name, username)
  );
  if (errorAddingUser || !added) return res
    .status(errorAddingUser.statusCode)
    .json(errorAddingUser);
  res.status(added.statusCode).json(added);
};

const getUserByUsername = async (req, res) => {
  const { username } = req.query;
  const [errorFetchingUser, user] = await to(
    userController.getUserByUsername(username)
  );
  if (errorFetchingUser || !user) return res
    .status(errorFetchingUser.statusCode)
    .json(errorFetchingUser);
  res.status(user.statusCode).json(user);
};

module.exports = {
  addUser,
  getUserByUsername,
};
