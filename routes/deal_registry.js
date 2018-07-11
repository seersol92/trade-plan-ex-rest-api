const express = require('express');
const router = express.Router();
const deal_controller = require('../controllers/dealController');
const protected = require('./../middleware/auth');

/**
 * List of all deal registered
 * @method: GET
 * 
 */ 

router.get('/', protected, deal_controller.index);

/**
 *  Get deal based by Id
 *  @param dealId
 */

router.get('/:id', protected, deal_controller.getDealById);

/**
 *  Get deal count based on type
 *  @param deal  type
 */

router.get('/deals-counter/:type', protected, deal_controller.dealCount);


/**
 * Register New Deal
 * Method: POST
 */

router.post('/', protected, deal_controller.register_deal);

/**
 * Update Update
 * Method: PUT
 */

router.put('/:id', protected, deal_controller.update);

/**
 * Delete Deal
 * Method: Delete
 * @param DealID
 */
router.delete('/:id', protected, deal_controller.delete);

module.exports = router;