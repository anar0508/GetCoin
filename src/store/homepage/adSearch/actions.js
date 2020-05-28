export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';
export const CHANGE_COMPOSITION = 'CHANGE_COMPOSITION';
export const CHANGE_QUALITY = 'CHANGE_QUALITY';
export const CHANGE_PRICE_FROM = 'CHANGE_PRICE_FROM';
export const CHANGE_PRICE_TO = 'CHANGE_PRICE_TO';
export const CHANGE_YEAR_FROM = 'CHANGE_YEAR_FROM';
export const CHANGE_YEAR_TO = 'CHANGE_YEAR_TO';


export const changeCountry = (newCountry) => {
    return {
        type: CHANGE_COUNTRY,
        payload: newCountry
    }
}

export const changeComposition = (newComposition) => {
    return {
        type: CHANGE_COMPOSITION,
        payload: newComposition
    }
}

export const changeQuality = (newQuality) => {
    return {
        type: CHANGE_QUALITY,
        payload: newQuality
    }
}

export const changePriceFrom = (newPriceFrom) => {
    return {
        type: CHANGE_PRICE_FROM,
        payload: newPriceFrom
    }
}

export const changePriceTo = (newPriceTo) => {
    return {
        type: CHANGE_PRICE_TO,
        payload: newPriceTo
    }
}

export const changeYearFrom = (newYearFrom) => {
    return {
        type: CHANGE_YEAR_FROM,
        payload: newYearFrom
    }
}

export const changeYearTo = (newYearTo) => {
    return {
        type: CHANGE_YEAR_TO,
        payload: newYearTo
    }
}

export const resetAdvancedSearchParms = () => (dispatch, getState) => {
    dispatch(changeCountry(''));
    dispatch(changeComposition(''));
    dispatch(changeQuality(''));
    dispatch(changePriceFrom(''));
    dispatch(changePriceTo(''));
    dispatch(changeYearFrom(''));
    dispatch(changeYearTo(''));
}