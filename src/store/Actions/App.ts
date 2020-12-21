import * as actionTypes from './ActionTypes';


export const addBasket = (id: string, title: string, image: string, price: string, rating: number) => {
    console.log('el Price', price);
    return {
        type: actionTypes.ADD_TO_BASKET,
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            quantity: 1,
        }
    }
}