const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('quy'));

const server = app.listen(5555, function () {
    console.log("Express App running at http://127.0.0.1:5555/");
 });