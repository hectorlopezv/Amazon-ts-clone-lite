import React from 'react';
import CheckOutProduct from '../../../components/CheckOut/CheckOutProduct';

export interface CheckOutProductContainerProps {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: string;
    quantity: string;
    onClick: any;
}
 
const CheckOutProductContainer: React.FC<CheckOutProductContainerProps> = ({onClick, quantity,id, title, image, price, rating}) => {
    return (

        <CheckOutProduct>
            <CheckOutProduct.Image src={image} alt="" />
            
            <CheckOutProduct.Info>
                <CheckOutProduct.Title>{title+ ` (${quantity})`}</CheckOutProduct.Title>
                <CheckOutProduct.Price><small>$</small><strong>{price}</strong></CheckOutProduct.Price>
                <CheckOutProduct.Rating>
                    {Array(rating).fill(rating).map((_,i) => (
                       <p key={i}>🌟</p> 
                    ))}
                </CheckOutProduct.Rating>
                <CheckOutProduct.Button onClick={onClick}>Remove from basket</CheckOutProduct.Button>
            </CheckOutProduct.Info>
            
        </CheckOutProduct>
      );
}
 
export default CheckOutProductContainer;