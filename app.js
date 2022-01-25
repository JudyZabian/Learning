// const express = require("express")
// const app = express ()

// var mysql = require('mysql')
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'my_db'
// })

// connection.connect()

// const student = { Name: 'Ray', Major: 'Insurance' };
// connection.query('INSERT INTO students SET ?', student, (err, res) => {
//   if(err) throw err;

//   console.log('Last insert ID:', res.insertId);
// });

// connection.query(
//     'UPDATE students SET Name = ? Where ID = ?',
//     ['Leipzig', 3],
//     (err, result) => {
//       if (err) throw err;
  
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
//   );



// connection.query('Select * from students', function (err, rows, fields) {
//     if (err) throw err
  
//     console.log('Student Table: ', rows)
//   })
// connection.end()

// app.listen(9000)a
// console.log("listening on port")