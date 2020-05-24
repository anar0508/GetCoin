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
    const { login, password, name } = req.body;
    let getUsersSQL = `SELECT login FROM users`;
    try {
        let users = await query(getUsersSQL);
        
        let checkLogin = users.find(user => user.login === login);
        if (!checkLogin) {
            let hash = await bcrypt.hash(password, 10);
            let addUserSQL = `INSERT INTO users (login, user_hash, user_name) VALUE (${connection.escape(login)}, ${connection.escape(hash)}, ${connection.escape(name)})`;
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
        let getUsersListSQL = `SELECT login, user_hash, user_name, admin FROM users`;
        let users = await query(getUsersListSQL);
        const userInBase = users.find(user => {
            if (user.login === login && checkUser(password, user.user_hash, bcrypt)) { 
             return user; } 
            else return null;});
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
                        res.status(200).json({ token: newToken, name:userInBase.user_name, admin:userInBase.admin });
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

checkUser = (password, hash, bcrypt) => {
    let match;
    match = bcrypt.compareSync(password, hash);
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
        res.status(200).json({ message: 'User is logged out' });
    } catch (error) {
        res.status(400).send("error");
    }
}

module.exports = { getUsers, register, login, logout }

