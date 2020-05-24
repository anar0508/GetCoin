// getHistory = async (query, connection, req, res) => {
//     const { login, password, name } = req.body;
//     let getUsersSQL = `SELECT login FROM users`;
//     try {
//         let users = await query(getUsersSQL);
        
//         let checkLogin = users.find(user => user.login === login);
//         if (!checkLogin) {
//             let hash = await bcrypt.hash(password, 10);
//             let addUserSQL = `INSERT INTO users (login, user_hash, user_name) VALUE (${connection.escape(login)}, ${connection.escape(hash)}, ${connection.escape(name)})`;
//             try {
//                 let user = await query(addUserSQL);
//                 res.status(200).json({ message: 'User is registered' });
//             } catch (error) {
//                 console.log('we are here');
                
//                 res.status(400).send(error);
//             }
//         } else { res.status(400).json({ message: 'User with such login is existed' }) }
//     } catch (error) {
//         res.status(400).send(error);
//     }

// }

// app.get('/history-in/:number', (req, res) => {
//     let getHistoryIn = `SELECT 
//     transactions.idTransaction,
//     transactions.transSum,
//     usersFrom.fullname AS fromUser,
//     usersTo.fullname AS toUser
// FROM
//     transactions
//         LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
//         LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
//     WHERE usersTo.card_number=${connection.escape(req.params.number)}
// ;`;
//     connection.query(getHistoryIn, (err, data) => {
//         if (!err) {
//             res.status(200).json(data);
//         } else {
//             res.status(404);
//         }
//     });
// });

// app.get('/history-out/:number', (req, res) => {
//     let getHistoryOut = `SELECT 
//     transactions.idTransaction,
//     transactions.transSum,
//     usersFrom.fullname AS fromUser,
//     usersTo.fullname AS toUser
// FROM
//     transactions
//         LEFT JOIN users AS usersFrom ON transactions.fromId = usersFrom.idUser
//         LEFT JOIN users AS usersTo ON transactions.toId = usersTo.idUser
//     WHERE usersFrom.card_number=${connection.escape(req.params.number)}
// ;`;
//     connection.query(getHistoryOut, (err, data) => {
//         if (!err) {
//             res.status(200).json(data);

//         } else {
//             res.status(404);
//         }
//     });
// });


module.exports = {  }
