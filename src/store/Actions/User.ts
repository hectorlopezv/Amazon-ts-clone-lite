import * as actionTypes from './ActionTypes';


export const addBasket = (user: any) => {
    return {
        type: actionTypes.ADD_USER_STORE,
        payload: {
            user: user
        }
    }
}