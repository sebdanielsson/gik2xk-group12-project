const {createResponseSuccess, createResponseError, createResponseMessage} = require('../helpers/responseHelper');
const db = require('../models');

// Get all products + include rating
async function getAll() {
  try {
    const allProducts = await db.product.findAll({
      include: [
        {
          model: db.rating,
          required: false,
        },
      ],
    });

    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Create new product
async function create(product) {
  try {
    const newProduct = await db.product.create(product);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
// Delete product
async function destroy(id) {
  try {
    const product = await db.product.findOne({where: {id}});
    await product.destroy();
    return createResponseMessage(200, 'Product deleted');
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Get single product by id + rating
async function getProductById(id) {
  try {
    const product = await db.product.findOne({
      where: {id},
      include: [db.rating],
    });
    return createResponseSuccess(product);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Add rating to product
async function addRating(id, rating) {
  if (!id) {
    return createResponseError(422, 'Id är obligatoriskt');
  }
  try {
    rating.productId = id;
    await db.rating.create(rating);

    const productWithRating = await db.product.findOne({
      where: {id},
      include: [db.rating],
    });

    return createResponseSuccess(productWithRating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
// Get RatingByID products
async function getRatingByID(id) {
  try {
    const rating = await db.rating.findAll({
      where: {id},
    });
    return createResponseSuccess(rating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Find or create cart
async function _findOrCreateCart(user_id) {
  try {
    // Find an incomplete cart for the given user
    const cart = await db.cart.findOne({
      where: {
        user_id,
        paid: false,
      },
    });

    if (cart) {
      return cart;
    } else {
      // If there is no incomplete cart, create a new one and return its id
      const newCart = await db.cart.create({
        userId: user_id,
        paid: false,
      });
      return newCart;
    }
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Add product to cart
async function addToCart(user_id, product_id, quantity) {
  try {
    // Find or create a cart for the given user
    const cart = await _findOrCreateCart(user_id);
    // Get the product by its id
    const product = await db.product.findByPk(product_id);
    // cartRow = await findByPk cart.id && product.id
    let cartRow = await db.cartRow.findOne({
      where: {
        cartId: cart.id,
        productId: product.id,
      },
    });
    if (cartRow) {
      return createResponseError(422, 'Product already in cart');
    } else {
      cartRow = await db.cartRow.create({
        quantity,
        productId: product.id,
        cartId: cart.id,
      });
    }
    // Return the newly created cart row
    return createResponseSuccess(cartRow);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  create,
  getAll,
  getProductById,
  addRating,
  destroy,
  addToCart,
  getRatingByID,
};
