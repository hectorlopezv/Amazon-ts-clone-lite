import React from 'react';
import Product from '../../components/Product';

export interface ProductContainerProps {
    title: string;
    image: string;
    price: string;
    rating: number;
}
 
const ProductContainer: React.FC<ProductContainerProps> = ({title, image, price, rating}) => {
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
            <Product.Button>Add To Basket</Product.Button>
        </Product>
    );
}
 
export default ProductContainer;