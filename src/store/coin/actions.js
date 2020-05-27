export const COIN_TO_CART = 'COIN_TO_CART';


export const coinToCart = (newCoin) => {
    return {
        type: COIN_TO_CART,
        payload: newCoin
    }
}



