const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require('../helpers/responseHelper');
const db = require('../models');

// Get all users
async function getAll() {
  try {
    const allUsers = await db.user.findAll();
    return createResponseSuccess(allUsers);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Create new user
async function create(user) {
  try {
    const newUser = await db.user.create(user);
    return createResponseSuccess(newUser);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Delete user
async function destroy(id) {
  try {
    const user = await db.user.findOne({where: {id}});
    await user.destroy();
    return createResponseMessage(200, 'User deleted');
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getAll,
  create,
  destroy,
};
