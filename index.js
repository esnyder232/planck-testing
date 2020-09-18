const express = require('express')
const path = require('path');
const app = express();

const port = 8080;

//create web server
var server = app.listen(port, () => {console.log(`Example app listening at http://localhost:${port}`)})


//make basic http endpoints
app.use('/', express.static(path.join(__dirname, "/")));

// app.get('/ws-test.js', (req, res) => {res.sendFile(path.join(__dirname, "/ws-test.js"))});
app.get('/index.html', (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, "/index.html"))});
