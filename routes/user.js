const express = require('express');
const router = express.Router();
const protected = require('./../middleware/auth');
const user_controller = require('../controllers/userController');

/**
 * List of all User
 * @method: GET
 * 
 */ 
router.get('/', user_controller.index);

// Get User by id
router.get('/get-user/:id', user_controller.get_user_by_id);

// POST request for user.
router.post('/', user_controller.create_user);

// PUT request for update.
router.put('/', user_controller.user_update);

// POST request for deleting
router.delete('/:id', user_controller.user_delete_post);

module.exports = router;