import React from 'react';
import Product from '../../components/Product';
import {useSelector, useDispatch} from 'react-redux';
import {addBasket} from '../../store/Actions/App';

export interface ProductContainerProps {
    title: string;
    image: string;
    price: string;
    rating: number;
    id: string;
}
 
const ProductContainer: React.FC<ProductContainerProps> = ({id, title, image, price, rating}) => {
    //redux dispathc action
    const dispatch = useDispatch();
    const AddToBasket = (id: string, title: string, image: string, price: string, rating: number) => dispatch(addBasket(id, title, image, price, rating));

    return (  
        <Product>
            <Product.Info>
                <Product.Text>{title}</Product.Text>
                <Product.Price>
                    <small>$</small> 
                    <strong>{price}</strong>
                </Product.Price>
                <Product.Rating>
                    {Array(rating).fill(rating).map((_,i) => (
                       <p key={i}>🌟</p> 
                    ))}
                    
                </Product.Rating> 
            </Product.Info>
            <Product.Image 
                src={image} 
                alt="Product Image"
            />
            <Product.Button onClick={() => AddToBasket(id, title, image, price, rating,)}>Add To Basket</Product.Button>
        </Product>
    );
}
 
export default ProductContainer;