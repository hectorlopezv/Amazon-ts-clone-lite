import React from 'react';
import {
    Container, 
    Text as PText, 
    Info as PInfo, 
    Price as PPrice,
    Rating as PRating,
    Image as PImage,
    Button as PButton
} from './styles/Product';


export interface TextProps {
    
}
 
const Text: React.FC<TextProps> = ({children, ...props}) => {
    return (  
        <PText {...props}>{children}</PText>
    );
}

export interface InfoProps {
    
}
 
const Info: React.FC<InfoProps> = ({children, ...props}) => {
    return ( <PInfo {...props}>{children}</PInfo> );
}

export interface PriceProps {
    
}
 
const Price: React.FC<PriceProps> = ({children, ...props}) => {
    return (  <PPrice {...props}>{children}</PPrice> );
}
 
export interface RatingProps {
    
}
 
const Rating: React.FC<RatingProps> = ({children, ...props}) => {
    return (  <PRating {...props}>{children}</PRating>);
}
 
export interface ImageProps {
    src: string;
    alt: string;
}
 
const Image: React.FC<ImageProps> = ({children, ...props}) => {
    return (  <PImage {...props}>{children}</PImage>);
}
 
export interface ButtonProps {
    
}
 
const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (  <PButton {...props}>{children}</PButton>);
}
 
///////////////////////////////////////////////////////////////////////////////////////////
interface CompoundComponets {
    Text: React.FC<TextProps>;
    Info: React.FC<InfoProps>;
    Price: React.FC<PriceProps>;
    Rating: React.FC<RatingProps>;
    Image: React.FC<ImageProps>;
    Button: React.FC<ButtonProps>;
}

export interface ProductProps {
    
}
 
const Product: React.FC<ProductProps> & CompoundComponets = ({children, ...props}) => {
    return (  <Container {...props}>{children} </Container>);
}

Product.Text = Text;
Product.Info = Info;
Product.Price = Price;
Product.Rating = Rating;
Product.Image = Image;
Product.Button = Button;
export default Product;