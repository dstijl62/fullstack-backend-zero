

const { response } = require('express');
const connection = require('../config/database');

const getHomepage = (req, res) => {
    return res.render('home.ejs')

};

/*
function getABC(req, res) {
    res.send('Check abc!');
    
}   //-> function kiểu truyền thống

*/

//arrow function -> cú pháp mới, giúp viết code ngắn hơn và tường minh hơn
const getABC = (req, res) => {
    res.send('Check abc!')
};

const getHtml = (req, res) => {
    // res.send('<h1>Hello World! Test html</h1>')
  res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    console.log(">>> req.body: ", req.body);
    res.send('create a new user')

}

module.exports = {
    getHomepage, getABC, getHtml,
    postCreateUser
}
