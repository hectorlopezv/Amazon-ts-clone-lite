import React from 'react';
import {Container, Title as Otitle, Item as Oitem, Frame as Oframe} from './styles/Order';
import moment from 'moment';
import CurrencyContainer from '../Currency/Currency';
import CheckOutProductContainer from '../../containers/CheckOut/CheckOutProduct/CheckOutProduct';
export interface FrameProps {
    
}
 
const Frame: React.FC<FrameProps> = ({children, ...props}) => {
    return (<Oframe {...props}>{children}</Oframe>  );
}
 
export interface ItemProps {
    order: any;
}
 
const Item: React.FC<ItemProps> = ({order}) => {
    
    return (  
    <Oitem >
    
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order_id">
            <small>{order.id}</small>
        </p>
        <CurrencyContainer amount={order.data.amount} />  
        {order.data.basket?.map((item: any) =>(
            <CheckOutProductContainer
            // quantity,id, title, image, price, rating
                id={item.id}
                quantity={item.quantity}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
            />
        ))}
         
    </Oitem>);
}
 
export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Otitle {...props}>{children}</Otitle> );
}


///////////////////////////////////////////////////////////////////////////////////////////
interface compounds {
    Title: React.FC<TitleProps>;
    Item: React.FC<ItemProps>;
    Frame: React.FC<FrameProps>;
}
export interface OrderProps {
    
}
 
const Order: React.FC<OrderProps> &compounds = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}
Order.Title = Title;
Order.Item = Item;
Order.Frame = Frame;
export default Order;