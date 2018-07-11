const express = require('express');
const router = express.Router();
const protected = require('../middleware/auth');
// Require controller modules.
const company = require('../controllers/companyRegisterController');
/// Company ROUTES ///

/**
 * get list of all company register
 * @method: @GET
 * @prams: @null
 */ 

router.get('/', protected, company.company_list);

/**
 * get list of all company register only email and name
 */ 

router.get('/companies', protected, company.companies_info);


/**
 * Create new  company register
 * @method: @POST
 * 
 */

router.post('/create', protected, company.company_create_post);

module.exports = router;