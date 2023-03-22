const {createResponseSuccess, createResponseError, createResponseMessage} = require('../helpers/responseHelper');
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

//get cart by userid
async function getCart(user_id) {
  try {
    const cart = await db.cart.findOne({
      where: {
        userId: user_id,
      },
      include: {
        model: db.product,
        attributes: ['title', 'price'],
      },
    });
    if (cart) {
      return createResponseSuccess(_cleanUpCart(cart));
    } else {
      return createResponseError(404, 'Cart does not exist');
    }
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

function _cleanUpCart(cart) {
  const cleanCart = {
    id: cart.id,
    user: cart.userId,
    totalTotal: 0,
    products: [],
  };

  if (cart.products) {
    cart.products.forEach((product) => {
      const totalPrice = product.cartRow.quantity * product.price;
      cleanCart.totalTotal += totalPrice;
      cleanCart.products.push({
        title: product.title,
        price: product.price,
        quantity: product.cartRow.quantity,
        totalPrice: totalPrice,
      });
    });
  }

  return cleanCart;
}

module.exports = {
  getAll,
  create,
  destroy,
  getCart,
};
