//http://localhost:8888/v1/

const express = require('express');
//const tenBien = require('ten-module');

const {getHomepage, getABC, getHtml} = require('../controllers/homeController');

const router = express.Router();

// router.Method('/route', handler);

//Khai báo route => Định nghĩa route
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/html', getHtml);


module.exports = router; //export default