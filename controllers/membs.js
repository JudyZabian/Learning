const req = require('express/lib/request');
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})
connection.connect()
 newmemb = require ("../controller/membs", newmemb)
// newmemb function for post memb route


//const newmemb = { Name: 'Ray', Major: 'Insurance' };
connection.query('INSERT INTO students SET ?', newmemb, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

module.exports = {newmemb}


// //GET '/tea'
// const getAllmemb = (req, res, next) => {
//     res.json({message: "GET all tea"});
// };

// //POST '/tea'
// const newmemb = (req, res, next) => {
//     res.json({message: "POST new tea"});
// };

// //DELETE '/tea'
// const deleteAllmemb = (req, res, next) => {
//     res.json({message: "DELETE all tea"});
// };

// //GET '/tea/:name'
// const getOnememb = (req, res, next) => {
//     res.json({message: "GET 1 tea"});
// };

// //POST '/tea/:name'
// const newComment = (req, res, next) => {
//     res.json({message: "POST 1 tea comment"});
// };

// //DELETE '/tea/:name'
// const deleteOnememb = (req, res, next) => {
//     res.json({message: "DELETE 1 tea"});
// };

// //export controller functions
// module.exports = {
//     getAllmemb, 
//     newTmemb,
//     deleteAllmemb,
//     getOnememb,
//     newComment,
//     deleteOnememb
// }