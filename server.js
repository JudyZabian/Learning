const express = require ('express');
const routes = require('./routes/membs'); // import the routes

const app = express();

app.use(express.json());
var membs = require("./routes/membs")

var mysql = require('mysql');
const { newmemb } = require('./controllers/membs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
})
connection.connect()
console.log('Connected to Database')

app.use('/', routes); //to use the routes
app.use('/membs',newmemb)


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
