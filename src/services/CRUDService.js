

 const connection = require("../config/database");


const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users')
    return results;
}

const getUserByID = async (userId) => {
    let [results, fields] = 
      await connection.query('select * from Users where id = ?', [userId]);
    //   console.log(">>> check results: ", results);

      let user = results && results.length > 0 ? results[0] : {};

      return user; 

}

 const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
   ` 
    UPDATE Users
    SET Email = ?, City = ?, Name = ?
    WHERE Id = ?
   `,[email, city, name, userId]
    );
 }

module.exports = {
    getAllUsers, getUserByID, updateUserById
}