const express = require('express');
const router = express.Router();
//access token middle ware
const protected = require('../middleware/auth');
// Require controller modules.
const inquiry_content_controller = require('../controllers/inquiryContentController');

/**
 * get list of all inquiry content
 * @method: @GET
 * @prams: @null
 */ 

router.get('/', protected, inquiry_content_controller.content_list);

/**
 * get list of all inquiry content by Type
 * @method: @GET
 * @prams: @type
 */
router.get('/:type', protected, inquiry_content_controller.content_list_type);

// POST request for creating content.
router.post('/create', inquiry_content_controller.create_post);

router.post('/update-detail', inquiry_content_controller.update_detail);

router.post('/delete-detail', inquiry_content_controller.delete_detail);

module.exports = router;