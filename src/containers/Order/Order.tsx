import { S_IFCHR } from 'constants';
import React from 'react';
import Order from '../../components/Order';
export interface OrderContainerProps {
    
}
 
const OrderContainer: React.FC<OrderContainerProps> = () => {
    //pushing orders for the user logged into FIRESTORE
    return ( 
        <Order>
            <Order.Title>Your Order</Order.Title>
        </Order>
     );
}
 
export default OrderContainer;