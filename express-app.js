const express = require('express');
const app = express();
const path = require('path');
const apiPath = '/api/';


app.use(express.static('client'));
app.use(apiPath+'users',require('./routes/users.route'));



const server = app.listen(5000, function () {
   console.log("Express App running at http://127.0.0.1:5000/");
})