import React from 'react';
import { 
    Title as Ctitle, 
    Button as Cbutton, 
    Container, 
    Image as Cimage, 
    Info as Cinfo,
    Price as Cprice,
    Rating as Crating
} from './styles/CheckOutProduct';

export interface ImageProps {
    src: string;
    alt: string;
}
 
const Image: React.FC<ImageProps> = ({...props}) => {
    return (  <Cimage {...props}/>);
}
 
export interface InfoProps {
    
}
 
const Info: React.FC<InfoProps> = ({children, ...props}) => {
    return (  <Cinfo {...props}>{children}</Cinfo>);
}

export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Ctitle {...props}>{children}</Ctitle>);
}

export interface PriceProps {
    
}
 
const Price: React.FC<PriceProps> = ({children, ...props}) => {
    return (<Cprice {...props}>{children}</Cprice>);
}

export interface RatingProps {
    
}
 
const Rating: React.FC<RatingProps> = ({children, ...props}) => {
    return (  <Crating {...props}>{children}</Crating>);
}

export interface ButtonProps {
    onClick?: any;
}
 
const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (  <Cbutton {...props}>{children}</Cbutton>);
}
 
/////////////////////////////////////////////////////////////////////////////////////////
interface CompundCheckOutProduct{
    Image: React.FC<ImageProps>;
    Info: React.FC<InfoProps>;
    Title: React.FC<TitleProps>;
    Price: React.FC<PriceProps>;
    Rating: React.FC<RatingProps>;
    Button: React.FC<ButtonProps>;
}

export interface CheckOutProductProps {
    ref?: any;
}
 
const CheckOutProduct: React.FC<CheckOutProductProps> & CompundCheckOutProduct = ({children, ...props}) => {
    return ( <Container {...props}>{children}</Container> );
}
CheckOutProduct.Image = Image;
CheckOutProduct.Info = Info;
CheckOutProduct.Title = Title;
CheckOutProduct.Price = Price;
CheckOutProduct.Rating = Rating;
CheckOutProduct.Button = Button;


export default CheckOutProduct;