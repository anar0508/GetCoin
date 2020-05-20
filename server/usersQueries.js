getUsers = async (query, req, res) => {
    let getUsersSQL = `SELECT login FROM users`;
    try {
        let user = await query(getUsersSQL);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

register = async (query, connection, bcrypt, req, res) => {
    const { login, password } = req.body;
    let getUsersSQL = `SELECT login FROM users`;
    try {
        let users = await query(getUsersSQL);

        let checkLogin = users.find(user => user.login === login);
        if (!checkLogin) {
            let hash = await bcrypt.hash(password, 10);
            let addUserSQL = `INSERT INTO users (login, user_hash) VALUE (${connection.escape(login)}, ${connection.escape(hash)})`;
            try {
                let user = await query(addUserSQL);
                res.status(200).json({ message: 'User is registered' });
            } catch (error) {
                res.status(400).send(error);
            }
        } else { res.status(400).json({ message: 'User with such login is existed' }) }
    } catch (error) {
        res.status(400).send(error);
    }

}

login = async (query, connection, bcrypt, req, res) => {
    const { login, password } = req.body;
    try {
        let getUsersListSQL = `SELECT login, user_hash FROM users`;
        let users = await query(getUsersListSQL);
        const userInBase = users.find(user => user.login === login && checkUser(password, user.user_hash, bcrypt))
        if (!userInBase) {
            res.status(400).json({ message: 'Can not find user or password is wrong' })
        } else {
            let findUserTokensSQL = `SELECT token FROM tokens WHERE login=${connection.escape(login)}`;
            try {
                let user = await query(findUserTokensSQL);
                if (user.length >= 1) {
                    res.status(400).json({ message: 'User is already logged in' });
                } else {
                    const newToken = randomString();
                    let addTokenSQL = `INSERT INTO tokens (login, token) VALUE (${connection.escape(login)}, ${connection.escape(newToken)})`;
                    try {
                        let token = await query(addTokenSQL);
                        res.status(200).json({ token: newToken });
                    } catch (error) {
                        res.status(404).send(error);
                    }
                }
            } catch (error) {
                res.status(404).send(error);
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'db error' });
    }

}

checkUser = async (password, hash, bcrypt) => {
    const match = await bcrypt.compare(password, hash);
    return match;
}

randomString = () => {
    let resString = '';
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const length = Math.floor(10 + Math.random() * 1000);
    for (let i = 0; i < length; i++) {
        resString += letters[Math.floor(Math.random() * letters.length) - 1];
    }
    return resString;
}

logout = async (query, connection, req, res) => {
    const { token } = req.body;
    let deleteTokenSQL = `DELETE FROM tokens WHERE token = ${connection.escape(token)}`;
    try {

        let deleted = await query(deleteTokenSQL);
        res.status(200).json({message:'User is logged out'});
    } catch (error) {
        res.status(400).send("error");
    }
}

module.exports = { getUsers, register, login, logout }


// getUser = async (query, req, res) => {
//     let getUserSQL = `SELECT * FROM users WHERE (idUser=${connection.escape(req.params.id)});`;
//     try {
//         let coin = await query(getCoinSQL);
//         res.status(200).json(coin)
//     } catch (error) {
//         res.status(404);
//     }
// }

// app.get('/users/:id', (req, res) => {
//     let getUser = ` SELECT * FROM bootcamp.users WHERE idUser="${connection.escape(req.params.id)}";`;
//     connection.query(getUser, (err, data) => {
//         if (!err) {
//             res.status(200).send('user is found')
//         } else {
//             console.log(err);
//         }
//     })
// });


// app.put('/users/:id', (req, res) => {
//     let changeBalanсeFrom = `UPDATE bootcamp.users SET balance =  balance - ${connection.escape(sum)} WHERE idUser=${from};`;
//     let changeBalanсeTo = `UPDATE bootcamp.users SET balance =  balance + ${connection.escape(sum)}WHERE idUser=${to};`;
//     const { fullName, sex, birthday, card_number } = req.body;
//     let updateUser = `UPDATE bootcamp.users SET 
//     fullName=${connection.escape(fullName)}, 
//     sex=${connection.escape(sex)},
//     birthday=${connection.escape(birthday)},
//     card_number=${connection.escape(card_number)}
//     WHERE idUser=${connection.escape(req.params.id)};`;
//     connection.query(updateUser, (err, data) => {
//         if (!err) {
//             res.status(200).send('user is changed')
//         } else {
//             console.log(err);
//         }
//     })
// });


// app.delete('/users/:id', (req, res) => {
//     let deleteUser = `DELETE FROM bootcamp.users WHERE (idUser=${connection.escape(req.params.id)});`;
//     connection.query(deleteUser, (err, data) => {
//         if (!err) {
//             res.status(200).send('user is deleted')
//         } else {
//             console.log(err);
//         }
//     });
// });

