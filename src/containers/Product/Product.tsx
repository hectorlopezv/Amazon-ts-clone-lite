import React from 'react';
import Product from '../../components/Product';

export interface ProductContainerProps {
    
}
 
const ProductContainer: React.FC<ProductContainerProps> = () => {
    return (  
        <Product>
            <Product.Info>
                <Product.Text>the lean Startup</Product.Text>
                <Product.Price>
                    <small>$</small> 
                    <strong>19.99</strong>
                </Product.Price>
                <Product.Rating>
                    <p>🌟</p>
                </Product.Rating> 
            </Product.Info>
            <Product.Image 
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
                alt="Product Image"
            />
            <Product.Button>Add To Basket</Product.Button>
        </Product>
    );
}
 
export default ProductContainer;