const path = require("path");

getImg = async (query, connection, req, res) => {
    const type = req.query.type;
    const id = +req.query.id;
    const side = req.query.side;
    if (!type){
        let getImageSQL = `SELECT ${side==='obverse'?'obverse_coin': 'reverse_coin'} FROM coins WHERE idCoin = ${connection.escape(id)}`;       
        try {
            let img = await query(getImageSQL);
            let property= Object.keys(img[0]);
            let fileName= img[0][property] + '.png';             
            res.sendFile(path.join(__dirname, fileName))
        } catch (error) {
            res.status(400).send(error);
        }
    }
    else {
        let getImageSQL = `SELECT obverse_coin FROM coins WHERE coin_type = ${connection.escape(type)} LIMIT 1`;
        try {
            let img = await query(getImageSQL);
            let property= Object.keys(img[0]);
            let fileName= img[0][property] + '.png';             
            res.sendFile(path.join(__dirname, fileName))
        } catch (error) {
            res.status(400).send(error);
        }
    }

};


module.exports = { getImg }

