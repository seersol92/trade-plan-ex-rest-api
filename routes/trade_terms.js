const express = require('express');
const router = express.Router();
const term_controller = require('../controllers/tradeTermsController');
const protected = require('./../middleware/auth');

/**
 * List of all terms
 * @method: GET
 * 
 */ 

router.get('/', protected, term_controller.index);

/**
 * Register New Terms
 * Method: POST
 */

router.post('/', protected, term_controller.register_term);

/**
 * Update Trade Terms
 * Method: PUT
 */

router.put('/:id', protected ,term_controller.update_term);

/**
 * Delete Trade Terms
 * Method: Delete
 */

router.delete('/:id', protected ,term_controller.delete_term);
module.exports = router;