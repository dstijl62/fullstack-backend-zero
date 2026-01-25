//http://localhost:8888/v1/

const express = require('express');
//const tenBien = require('ten-module');

const {
    getHomepage, getABC, getHtml, 
    getCreatePage, postCreateUser, getUpdatePage,
    postUpdateUser

} = require('../controllers/homeController');

const router = express.Router();

// router.Method('/route', handler);

//Khai báo route => Định nghĩa route
router.get('/', getHomepage);

router.get('/abc', getABC);

router.get('/html', getHtml);

router.get('/create', getCreatePage);
router.get('/update/:id', getUpdatePage);


router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);


module.exports = router; //export default