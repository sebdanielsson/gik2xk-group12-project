const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require('../helpers/responseHelper');
const db = require('../models');

// Get all products
async function getAll() {
  try {
    const allProducts = await db.product.findAll();
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

// Get single product by id + rating
async function getProductById(id) {
  try {
    const product = await db.product.findOne({
      where: {id},
      include: [db.rating],
    });
    /* Om allt blev bra, returnera post */
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

module.exports = {
  create,
  getAll,
  getProductById,
  addRating,
};
