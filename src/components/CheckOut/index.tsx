import React from 'react'
import {Container, Left as Cleft, Right as Cright, Img, Title as Ctitle} from './styles/CheckOut';

export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Ctitle {...props}>{children}</Ctitle> );
}
 

export interface ImageProps {
    src: string;
    alt: string;
}
 
const Image: React.FC<ImageProps> = ({...props}) => {
    return (  <Img {...props}/> );
}
 

export interface RightProps {
    
}
 
const Right: React.FC<RightProps> = ({children, ...props}) => {
    return (  <Cright {...props}>{children}</Cright> );
}
 

export interface LeftProps {
    
}
 
const Left: React.FC<LeftProps> = ({children, ...props}) => {
    return (  <Cleft {...props}>{children}</Cleft> );
}


interface CompoundComponets {
    Left: React.FC<LeftProps>;
    Right: React.FC<RightProps>;
    Image: React.FC<ImageProps>;
    Title: React.FC<TitleProps>;
}

export interface CheckOutProps {
    
}
 
const CheckOut: React.FC<CheckOutProps> & CompoundComponets = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}

CheckOut.Left = Left;
CheckOut.Right = Right;
CheckOut.Image = Image;
CheckOut.Title = Title;
export default CheckOut;