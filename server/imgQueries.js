const path = require("path");

getImg = async (query, connection, req, res) => {
    const type = req.query.type;
    const id = +req.query.id;
    const side = req.query.side;
    let getImageSQL;
    if (!type) {
        getImageSQL = `SELECT ${side === 'obverse' ? 'obverse_coin' : 'reverse_coin'} FROM coins WHERE idCoin = ${connection.escape(id)}`;

    } else if (type === 'popular') {
        getImageSQL = `SELECT obverse_coin FROM coins WHERE popularity> 20 ORDER BY popularity DESC LIMIT 1`;
    }
    else {
        getImageSQL = `SELECT obverse_coin FROM coins WHERE coin_type = ${connection.escape(type)} LIMIT 1`;
    }
    try {
        let img = await query(getImageSQL);
        let property = Object.keys(img[0]);
        let fileName = 'img/obverse/' + img[0][property] + '.png';
        res.sendFile(path.join(__dirname, fileName))
    } catch (error) {
        res.status(400).send(error);
    }

};

uploadImg = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    if (Object.keys(req.files).length === 2) {
        let reverseFile = req.files.reverseFile;
        let obverseFile = req.files.obverseFile;
        reverseFile.mv('./img/obverse/' + reverseFile.name, function (err) {
            if (err)
                return res.status(500).send(err);
            res.status(200);
        });
        obverseFile.mv('./img/obverse/' + obverseFile.name, function (err) {
            if (err)
                return res.status(500).send(err);

            res.status(200);;
        });
    } else if (Object.keys(req.files).length === 1) {
        let propName = Object.keys(req.files)[0];

        let newFile = req.files.propName;
        newFile.mv('./img/obverse/' + newFile.name, function (err) {
            if (err)
                return res.status(500).send(err);

            res.status(200);
        });
    }
}

module.exports = { getImg, uploadImg }

