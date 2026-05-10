const express = require('express')
const{generateshorturl} = require('../controllers/controlurl');

const router = express.Router();

router.post('/',generateshorturl);

module.exports = router;
