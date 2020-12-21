import * as ActionTypes from '../Actions/ActionTypes';
import * as _ from 'lodash';

const initialState = {
    basket: [] as any,
}

export const AppReducer = (state = initialState, action: any) => {
    if(action.type === ActionTypes.ADD_TO_BASKET)
    {
        console.log(action.item)
        const index_exists = _.findIndex(state.basket, function(o: any) { 
            console.log('callback');
            return Number(o.id) === Number(action.item.id)  });
        if (index_exists === -1){
            return {
            ...state,
            basket: [...state.basket, action.item]
            }
        }
        else {
            state.basket[index_exists].quantity += 1;
            return {
                ...state,
                basket: [...state.basket]
                }
        }

    }
    return state;
}


