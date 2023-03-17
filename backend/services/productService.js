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
      // If there is an incomplete cart, return its id
      console.log('Cart hittades: ', cart.id);
      return cart;
    } else {
      // If there is no incomplete cart, create a new one and return its id
      console.log('Cart hittades ej! Skapar nytt...');
      const newCart = await db.cart.create({user_id});
      return newCart;
    }
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

// Add product to cart
async function _addProductToCart(user_id, product_id, quantity) {
  try {
    // Find or create a cart for the given user
    const cart = await _findOrCreateCart(user_id);
    // Get the product by its id
    const product = await db.product.findByPk(product_id);
    console.log('DEBUG: Cart id: ', cart.id);
    // Create a new cart row and add the product to it
    const cartRow = await db.cartRow.create({
      //quantity,
      product_id,
      cart_id: cart.id,
    });

    // Return the newly created cart row
    return cartRow;
  } catch (error) {
    console.error(error);
  }
}

// Add product to cart
async function addToCart(user_id, product_id, quantity) {
  try {
    const newProduct = await _addProductToCart(user_id, product_id, quantity);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

/* async function _findOrCreateCart(name) {
  name = name.toLowerCase().trim();
  const foundOrCreatedCart = await db.cart.findOrCreate({where: {name}});

  return foundOrCreatedCart[0].id;
} */

/* async function _addProductToCart(product, cart) {
  await db.cartRow.destroy({where: {cartID: cart.id}});

  if (products) {
    products.forEach(async (product) => {
      const cartId = await _findOrCreateCart(cart);
      await cart.addTag(tagId);
    });
  }
} */

// Add product to cart <<< EJ KLAR >>>
/* async function addToCart(product) {
  try {
    const newProduct = await db.cart_row.create(product);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
} */

module.exports = {
  create,
  getAll,
  getProductById,
  addRating,
  destroy,
  addToCart,
};
