import React, {useEffect, useState} from 'react';
import Order from '../../components/Order';
import {db} from '../../lib/firebase.prod';
import {useSelector} from 'react-redux';
export interface OrderContainerProps {
    
}
 
const OrderContainer: React.FC<OrderContainerProps> = () => {
    //fetching orders for the user logged into FIRESTORE
    const user = useSelector((stateCurrent: any)=> stateCurrent.User);
    const basket = useSelector((stateCurrent: any) => stateCurrent.App.basket);
    const [Orders, setOrders] = useState<[]>();
    
    useEffect(() => {
        if(user) {
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot((snapshot: any) => {
                setOrders(snapshot.docs.map((doc: any)=> ({
                    id: doc.id,
                    data: doc.data()
                }) ));
            });
        }
        else {
            setOrders([])
        }

    }, [user]);

    return ( 
        <>
       
        <Order>
             <Order.Title>Your Orders</Order.Title>
            <Order.Frame>
                {Orders?.map((order: any) =>{
                    return <Order.Item order={order}/>
                })}
            </Order.Frame>
        </Order>
        </>
     );
}
 
export default OrderContainer;