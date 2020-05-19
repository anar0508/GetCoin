getCoins = async (query, connection, req, res) => {
    let getCoinsSQL = `SELECT * FROM coins`;
    try {
        let coinsList = await query(getCoinsSQL);
        if (!coinsList) {
            res.status(404);
        } else {
            const count = +req.query.count;
            const offset = +req.query.offset;
            (!count ? res.status(200).json(coinsList) : res.status(200).send({ users: JSON.parse(coinsList).slice(offset, offset + count), count: coinsList.length }))
        }
    } catch (error) {
        res.status(404);
    }
}

getCoin = async (query, connection, req, res) => {
    let getCoinSQL = `SELECT * FROM coins WHERE (idCoin=${connection.escape(req.params.id)});`;
    try {
        let coin = await query(getCoinSQL);
        res.status(200).json(coin)
    } catch (error) {
        res.status(404);
    }
}

checkAdmin = async (token, connection, query) => {
    let findUser = `SELECT login FROM tokens WHERE token=${connection.escape(token)}`;
    try {
        let user = await query(findUser);
        if (user.length === 1) {
            let checkAdminQuerry = `SELECT admin FROM users WHERE login=${connection.escape(user[0].login)}`
            let isAdmin = await query(checkAdminQuerry);
            if (isAdmin[0].admin === 0) { return true } else return null;
        }
    } catch (error) {
        return null;
    }
}

addCoin = async (query, connection, req, res) => {
    const { token,
        type,
        name,
        country,
        composition,
        quality,
        denomination,
        year,
        weight,
        price,
        price_currency,
        description,
        short_description,
        obverse,
        reverse,
        quantity } = req.body;
    if (!(await checkAdmin(token, connection, query))) {
        res.status(401).json({ message: 'User is not authorized' });
    } else {
        try {
            let denominationArr = denomination.split(' ');
            let addCoinSQL = `INSERT INTO coins (coin_type, coin_name, country, сomposition, quality, denomination, den_currency, issuance_year, weight, price, price_currency, description, short_description, obverse_coin, reverse_coin, quantity) 
    VALUE (${type}, '${name}', '${country}', ${composition}, ${quality}, ${Number(denominationArr[0])}, '${denominationArr[1]}', ${year}, '${weight}', ${price}, ${price_currency}, '${description}', '${short_description}', '${obverse}', '${reverse}', ${quantity} )`
            let newCoin = await connection.query(addCoinSQL);
            res.status(200).json(newCoin);
        }
        catch (error) {
            res.status(400).send(error);
        }
    }
}

changeCoin = async (query, connection, req, res) => {
    const { token, type, name, country, composition, quality, denomination, year, weight, price, price_currency, description, short_description, obverse, reverse, quantity } = req.body;
    if (!(await checkAdmin(token, connection, query))) {
        res.status(401).json({ message: 'User is not authorized' });
    } else {
        try {
            let denominationArr = denomination.split(' ');
            let updateCoinSQL = `UPDATE coins SET 
    coin_type=${connection.escape(type)}, 
    coin_name=${connection.escape(name)},
    country=${connection.escape(country)},
    сomposition=${connection.escape(composition)},
    quality=${connection.escape(quality)}, 
    denomination=${connection.escape(Number(denominationArr[0]))},
    den_currency=${connection.escape(denominationArr[1])},
    issuance_year=${connection.escape(year)},
    weight=${connection.escape(weight)}, 
    price=${connection.escape(price)},
    price_currency=${connection.escape(price_currency)},
    description=${connection.escape(description)},
    short_description=${connection.escape(short_description)},
    obverse_coin=${connection.escape(obverse)}, 
    reverse_coin=${connection.escape(reverse)},
    quantity=${connection.escape(quantity)}
    WHERE idCoin=${connection.escape(req.params.id)};`;
            let changedCoin = await connection.query(updateCoinSQL);
            res.status(200).json({ message: 'coin is changed' });
        } catch (error) {
            res.status(404);
        }
    }
}

deleteCoin = async (query, connection, req, res) => {

    if (!(await checkAdmin(req.body.token, connection, query))) {
        res.status(401).json({ message: 'User is not authorized' });
    } else {
        try {
            let deleteCoinSQL = `DELETE FROM coins WHERE (idCoin=${connection.escape(req.params.id)});`;
            let deteledCoin = await query(deleteCoinSQL);
            res.status(200).send('Coin is deleted');
        } catch (error) {
            res.status(404).json(error);
        }
    }
}

getAdvancedSearchInfo = async (query, connection, req, res) => {
    let getDistinctCountries = `SELECT DISTINCT country FROM coins;`;
    let getDistinctCompositions = `SELECT DISTINCT сomposition FROM coins;`;
    let getDistinctQualities = `SELECT DISTINCT quality FROM coins;`;

    try {
        let countriesList = await query(getDistinctCountries);
        let compositionsList = await query(getDistinctCompositions);
        let qualitiesList = await query(getDistinctQualities);
        
            res.status(200).json({countriesList, compositionsList, qualitiesList})
    } catch (error) {
        res.status(404).send('somthing is wrong');
    }
}

searchCoins = async(query, connection, req, res) =>{
    const text = req.query.text;
    const type = req.query.type;
    const country = req.query.country;
    const composition = req.query.composition;
    const priceFrom = +req.query.priceFrom;
    const priceTo = +req.query.priceTo;
    const yearFrom = +req.query.yearFrom;
    const yearTo = +req.query.yearTo;
  
    let getSearchSQL    
    if (!type){
        getSearchSQL = `SELECT * FROM coins WHERE 
        ${!country? `` :`country = ${connection.escape(country)} AND`}
        ${!composition? `` :`сomposition= ${connection.escape(composition)} AND`} 
        ${!priceFrom? `` :`price > ${connection.escape(priceFrom)} AND`} 
        ${!priceTo? `` :`price < ${connection.escape(priceTo)} AND`} 
        ${!yearFrom? `` :`issuance_year < ${connection.escape(yearFrom)} AND`} 
        ${!yearTo? `` :`issuance_year < ${connection.escape(yearTo)} AND`} 
        (coin_name LIKE '%${text}%' OR
        short_description LIKE '%${text}%' OR
        description LIKE '%${text}%')`;
    } else {
        getSearchSQL = `SELECT * FROM coins WHERE coin_type=${connection.escape(type)}`
    }
    try {
        let coinsList = await query(getSearchSQL);
        if (!coinsList) {
            res.status(404);
        } else {
            const count = +req.query.count;
            const offset = +req.query.offset;
            (!count ? res.status(200).json(coinsList) : res.status(200).send({ users: JSON.parse(coinsList).slice(offset, offset + count), count: coinsList.length }))
        }
    } catch (error) {
        res.status(404);
    }
}

module.exports = { getCoins, getCoin, addCoin, changeCoin, deleteCoin, getAdvancedSearchInfo, searchCoins }




