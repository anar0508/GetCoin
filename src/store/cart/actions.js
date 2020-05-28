export const PURCHASE = 'PURCHASE';

export const purchase = (purchasedCoins) => {
    return {
        type: PURCHASE,
        payload: purchasedCoins
    }
}

