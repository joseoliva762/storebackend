const reason = require('../../tools/reason');
const { to } = require('../../tools/to');
const { status } = require('../../tools/status');

const getUserByUsername = () => {
  return new Promise((resolve, reject) => {
    const excecuteController = async () => {
      reject(reason.build(status.notFound, null, 'User not found'));
    };
    return excecuteController();
  });
};

const addUser = () => {
  return new Promise((resolve, reject) => {
    const excecuteController = async () => {
      reject(reason.build(status.notFound, null, 'User not found'));
    };
    return excecuteController();
  });
};

module.exports = {
  addUser,
  getUserByUsername
};
