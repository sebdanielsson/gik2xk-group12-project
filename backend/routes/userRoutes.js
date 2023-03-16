const router = require('express').Router();
const userService = require('../services/userService');
const db = require('../models');

// Get all users
router.get('/', (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Create new user
router.post('/', (req, res) => {
  const user = req.body;
  userService.create(user).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Update user
router.put('/:id', (req, res) => {
  const user = req.body;
  const id = req.params.id;
  if (!id) {
    res.status(400).json('ID is mandatory.');
  } else {
    db.user
      .update(user, {
        where: {id: id},
      })
      .then((result) => {
        res.send('User updated.');
      });
  }
});

// Delete user
router.delete('/', (req, res) => {
  const user = req.body.id;
  userService.destroy(user).then((result) => {
    res.status(result.status).json(result.data);
  });
});

// Get user cart >>> OBS! Görs sist <<<
router.get('/cart', (req, res) => {
  userService.getCart().then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
