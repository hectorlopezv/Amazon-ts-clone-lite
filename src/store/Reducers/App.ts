import * as ActionTypes from '../Actions/ActionTypes';
import * as _ from 'lodash';

const initialState = {
    basket: [] as any,
    quantityItems: 0,
    totalPrice: 0,
}

export const AppReducer = (state = initialState, action: any) => {

    if(action.type === ActionTypes.EMPTY_BASKET){
        return {
            ...state,
            basket: [],
            quantityItems:0,
            totalPrice: 0
        }  
    }

    if(action.type === ActionTypes.ADD_TO_BASKET)
    {
        const index_exists = _.findIndex(state.basket, function(o: any) { return Number(o.id) === Number(action.item.id)  });
        if (index_exists === -1){
            state.quantityItems += 1;
            state.totalPrice += Number(action.item.price);
            return {
            ...state,
            basket: [...state.basket, action.item]
            }
        }
        else {
            state.basket[index_exists].quantity += 1;
            state.quantityItems += 1;
            state.totalPrice +=  Number(action.item.price);
            return {
                ...state,
                basket: [...state.basket]
                }
        }

    }

    if(action.type === ActionTypes.DELETE_FROM_BASKET)
    {
        const index_exists = _.findIndex(state.basket, function(o: any) { return Number(o.id) === Number(action.item.id)  });
        
        if(index_exists >= 0 && state.basket[index_exists].quantity === 1){
            state.quantityItems -= 1;
            state.totalPrice -= Number(action.item.price);
            //mutated array.... maybe use imutable...
            const filtered_basket = _.remove(state.basket, function(n: any) {
                return Number(n.id) !== Number(action.item.id);
              });
            return {
                ...state,
                basket: _.cloneDeep(filtered_basket)
            }
        }
        else if(index_exists >= 0){
            state.basket[index_exists].quantity -= 1;
            state.quantityItems -= 1;
            state.totalPrice -= Number(action.item.price);
            return {
                ...state,
                basket:[
                    ...state.basket,
                ]
            }
        }
    }

    return state;
}


