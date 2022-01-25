

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


// const router = express.Router();

// const teaController = require('../controllers/tea')
// router.post('/tea', teaController.newTea);
// module.exports = router

// // Gets All Members
// router.get('/', (req, res) => res.json(members));

// connection.query('Select * from students', function (err, rows, fields) {
//     if (err) throw err
  
//     console.log('Student Table: ', rows)
//   })
// connection.end()



// // Get Single Member
// router.get('/:id', (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     res.json(members.filter(idFilter(req)));
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

// // Create Member
// router.post('/', (req, res) => {
//   const newMember = {
//     ...req.body,
//     id: uuid.v4(),
//     status: 'active'
//   };

//   if (!newMember.name || !newMember.email) {
//     return res.status(400).json({ msg: 'Please include a name and email' });
//   }

//   members.push(newMember);
//   res.json(members);
//   // res.redirect('/');
// });

// // Update Member
// router.put('/:id', (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     members.forEach((member, i) => {
//       if (idFilter(req)(member)) {

//         const updMember = {...member, ...req.body};
//         members[i] = updMember
//         res.json({ msg: 'Member updated', updMember });
//       }
//     });
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

// // Delete Member
// router.delete('/:id', (req, res) => {
//   const found = members.some(idFilter(req));

//   if (found) {
//     res.json({
//       msg: 'Member deleted',
//       members: members.filter(member => !idFilter(req)(member))
//     });
//   } else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
//   }
// });

// module.exports = router;