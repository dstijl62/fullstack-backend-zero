

const { response } = require('express');
const connection = require('../config/database');
const {getAllUsers , getUserByID, updateUserById} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    // console.log(">>> check rows: ", results);

    let results = await getAllUsers();

    return res.render('home.ejs', {listUsers: results});

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

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    // console.log(">>> req.params:: ", req.params, userId);
    let user = await getUserByID(userId);

    res.render('edit.ejs', {userEdit : user}); // x <- y
}

const postCreateUser = async (req, res) => {
    console.log(">>> req.body: ", req.body);
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.City;

    // let {email, myname, City} = req.body;

    console.log(">>> email =", email, "Name = ", name, "City = ", city);

    // Using placeholders

// connection.query(
//   ` INSERT INTO 
//                Users (email, name, city)
//                VALUES (?, ?, ?)`,
//   [email, myname, City],
//   function (err, results) {
//     res.send(' Created user succeed !')
//   }
// );

let [results, fields] = await connection.query(
   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?) `,[email, name, city]
    );

    console.log(">>> check results: ", results);

    res.send(' Created user succeed !')

//     connection.query (
//     'select * from Users u',
//     function (err, results, fields) {
//      console.log(">>>results=", results); // results contains rows returned by server
//      //console.log(">>>fields=", fields); // fields contains extra meta data about results, if available
//     }
// )

//     const [results, fields] = await connection.query (
//         'select * from Users u'
// );
}

const postUpdateUser = async (req, res) => {
    //   console.log(">>> req.body: ", req.body);
      let email = req.body.email;
      let name = req.body.myname;
      let city = req.body.City;
      let userId = req.body.userId;

      await updateUserById(email, city, name, userId);

      console.log(
        ">>> email =", email, "Name = ", name, "City = ", city, 'userId =', userId
    );

    // res.send(' Updated user succeed !')
    res.redirect('/')

}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserByID(userId);

    // res.send(' Deleted a user !')
    res.render('delete.ejs',  {userEdit : user})

}

const postHandleRemoveUser = (req, res) => {
    res.send('ok deleted')
}


module.exports = {
    getHomepage, getABC, getHtml, 
    getCreatePage, getUpdatePage,
    postCreateUser, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
};
