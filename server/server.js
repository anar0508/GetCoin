const CoinsQueries = require('./coinsQueries.js');
const path = require("path");
const fileUpload = require('express-fileupload');
const UsersQueries = require('./usersQueries.js');
const ImgQueries = require('./imgQueries.js');
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

const connection = mysql.createPool("mysql://n1bvu94c8s6v7r6x:mirl9x26jbjnymyp@w1kr9ijlozl9l79i.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/ijcooavc5xu8fyo0");
const query = util.promisify(connection.query).bind(connection);

app.get('/coins', (req, res) => {
    CoinsQueries.getCoins(query, connection, req, res);
});

app.get('/searchCoins', (req, res) => {
    CoinsQueries.searchCoins(query, connection, req, res);
});

app.get('/coins/:id', (req, res) => {
    CoinsQueries.getCoin(query, connection, req, res);
});

app.get('/advanced', (req, res) => {
    CoinsQueries.getAdvancedSearchInfo(query, connection, req, res);
});


app.post('/admin/coins', (req, res) => {
    CoinsQueries.addCoin(query, connection, req, res);
});

app.put('/admin/coins/:id', (req, res) => {
    CoinsQueries.changeCoin(query, connection, req, res);
});

app.delete('/admin/coins/:id', (req, res) => {
    CoinsQueries.deleteCoin(query, connection, req, res);
});

app.post('/admin/upload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    
    
    if (Object.keys(req.files).length===2){
      let reverseFile = req.files.reverseFile;
      let obverseFile = req.files.obverseFile;
      reverseFile.mv('./img/obverse/'+reverseFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
        res.status(200);
      });
      obverseFile.mv('./img/obverse/'+obverseFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
    
          res.status(200);;
      });
    } else if (Object.keys(req.files).length===1) {
       let propName =Object.keys(req.files)[0];
        
       let newFile= req.files.propName;
       newFile.mv('./img/obverse/'+newFile.name, function(err) {
        if (err)
          return res.status(500).send(err);
    
        res.status(200);
      });
    }
  });

app.get('/users', (req, res) => {
    UsersQueries.getUsers(query, req, res)
});

app.post('/register', (req, res) => {
    UsersQueries.register(query, connection, bcrypt, req, res);
});


app.post('/login', (req, res) => {
    UsersQueries.login(query, connection, bcrypt, req, res);
});

app.delete('/logout', (req, res) => {
    UsersQueries.logout(query, connection, req, res);
});

app.get('/image', (req, res) => {
    ImgQueries.getImg(query, connection, req, res);
});


app.get('/history-in/:number', (req, res) => {
    let getHistoryIn = `SELECT 
    transactions.idTransaction,
    transactions.transSum,
    usersFrom.fullname AS fromUser,
    usersTo.fullname AS toUser
FROM
    transactions
        LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
        LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
    WHERE usersTo.card_number=${connection.escape(req.params.number)}
;`;
    connection.query(getHistoryIn, (err, data) => {
        if (!err) {
            res.status(200).json(data);
        } else {
            res.status(404);
        }
    });
});

app.get('/history-out/:number', (req, res) => {
    let getHistoryOut = `SELECT 
    transactions.idTransaction,
    transactions.transSum,
    usersFrom.fullname AS fromUser,
    usersTo.fullname AS toUser
FROM
    transactions
        LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
        LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
    WHERE usersFrom.card_number=${connection.escape(req.params.number)}
;`;
    connection.query(getHistoryOut, (err, data) => {
        if (!err) {
            res.status(200).json(data);

        } else {
            res.status(404);
        }
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, function () {
    console.log('Example app listening on port 8000!');
});