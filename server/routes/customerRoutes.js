const router = require('express').Router();
const { getCustomer } = require('../controllers/customerController');

router.route('/customer').get(getCustomer)

module.exports = router;