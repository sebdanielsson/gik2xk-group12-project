const router = require('express').Router();
const productService = require('../services/productService');
const db = require('../models');

// Get all products
router.get('/', (req, res) => {
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Create new product
router.post('/', (req, res) => {
  const product = req.body;
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Update product
router.put('/:id', (req, res) => {
  const product = req.body;
  const id = req.params.id;
  if (!id) {
    res.status(400).json('ID is mandatory.');
  } else {
    db.product
      .update(product, {
        where: {id: id},
      })
      .then((result) => {
        res.send('Product updated.');
      });
  }
});

// Get single product by id + rating
router.get('/:id', (req, res) => {
  const id = req.params.id;

  productService.getProductById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Delete product by id ** SKA Exporteras /
//läggas till Services
router.delete('/', (req, res) => {
  db.product
    .destroy({
      where: {id: req.body.id},
    })
    .then(() => {
      res.json(`Produkten raderades`);
    });
});

// Add rating to product
router.post('/:id/addRating', (req, res) => {
  const id = req.params.id;
  const rating = req.body;

  productService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Add product to cart
router.post(':id/addToCart', (req, res) => {
  productService.addToCart().then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
