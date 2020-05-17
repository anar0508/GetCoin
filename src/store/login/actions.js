export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME';
export const CHANGE_SECOND_NAME = 'CHANGE_SECOND_NAME';

export const changeFirstName = (newFirstName) => {
    return {
        type: CHANGE_FIRST_NAME,
        payload: newFirstName
    }
}

export const changeSecondName = (newSecondName) => {
    return {
        type: CHANGE_SECOND_NAME,
        payload: newSecondName
    }
}
