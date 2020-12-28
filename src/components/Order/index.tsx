import React from 'react';
import {Container, Title as Otitle} from './styles/Order';


export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Otitle {...props}>{children}</Otitle> );
}


///////////////////////////////////////////////////////////////////////////////////////////
interface compounds {
    Title: React.FC<TitleProps>;
}
export interface OrderProps {
    
}
 
const Order: React.FC<OrderProps> &compounds = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}
Order.Title = Title; 
export default Order;