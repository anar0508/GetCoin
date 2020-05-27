const fileUpload = require('express-fileupload');
const CoinsQueries = require('./coinsQueries.js');
const UsersQueries = require('./usersQueries.js');
const ImgQueries = require('./imgQueries.js');
const path = require('path')
const mysql = require('mysql');
const express = require('express');
const bcrypt = require('bcrypt');
var cors = require('cors');
const util = require('util');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(cors());
app.use(express.static(path.resolve('build')))


const connection = mysql.createPool("mysql://n1bvu94c8s6v7r6x:mirl9x26jbjnymyp@w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/ijcooavc5xu8fyo0");
const query = util.promisify(connection.query).bind(connection);

app.get('/api/coins', (req, res) => {
    CoinsQueries.getCoins(query, connection, req, res);
});

app.post('/api/searchCoins', (req, res) => {
    CoinsQueries.searchCoins(query, connection, req, res);
});

app.put('/api/coins/:id', (req, res) => {
    CoinsQueries.getCoin(query, connection, req, res);
});

app.get('/api/advanced', (req, res) => {
    CoinsQueries.getAdvancedSearchInfo(query, connection, req, res);
});

app.post('/api/admin/coins', (req, res) => {
    CoinsQueries.addCoin(query, connection, req, res);
});

app.put('/api/admin/coins/:id', (req, res) => {
    CoinsQueries.changeCoin(query, connection, req, res);
});

app.delete('/api/admin/coins/:id', (req, res) => {
    CoinsQueries.deleteCoin(query, connection, req, res);
});

app.post('/api/admin/upload', function(req, res) {
  ImgQueries.uploadImg(req, res);
  });

app.get('/api/users', (req, res) => {
    UsersQueries.getUsers(query, req, res)
});

app.post('/api/register', (req, res) => {
    UsersQueries.register(query, connection, bcrypt, req, res);
});

app.post('/api/login', (req, res) => {
    UsersQueries.login(query, connection, bcrypt, req, res);
});

app.delete('/api/logout', (req, res) => {
    UsersQueries.logout(query, connection, req, res);
});

app.get('/api/image', (req, res) => {
    ImgQueries.getImg(query, connection, req, res);
});

app.get('/*', function (_req, res) {
    res.sendFile(path.resolve('build/index.html'));
  });
  

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, function () {
    console.log('Example app listening on port 8000!');
});