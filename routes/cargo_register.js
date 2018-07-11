const express = require('express');
const router = express.Router();
//access token middle ware
const protected = require('../middleware/auth');
// Require controller modules.
const cargo_controller = require('../controllers/cargoRegisterController');

/**
 * get list of all inquiry content
 * @method: @GET
 * @prams: @null
 */ 
router.get('/', cargo_controller.cargo_list);

module.exports = router;
