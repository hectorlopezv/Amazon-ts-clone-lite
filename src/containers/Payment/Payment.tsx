import React from 'react';
import Payment from '../../components/Payment';
import {useSelector} from 'react-redux';
import CheckOutProductContainer from '../CheckOut/CheckOutProduct/CheckOutProduct';
import {useDispatch} from 'react-redux';
import { deleteItemBasket } from '../../store/Actions/App';
import FlipMove from 'react-flip-move';
import {Link} from 'react-router-dom';
export interface PaymentContainerProps {
    
}
 
const PaymentContainer: React.FC<PaymentContainerProps> = () => {
    const dispatch = useDispatch();
    const user = useSelector((stateCurrent: any) => stateCurrent.User);
    const basket = useSelector((stateCurrent: any) => stateCurrent.App.basket);
    const deleteItem = (id: any, price: any) => dispatch(deleteItemBasket(id, price));
    return (  
    <Payment>
        <Payment.Frame>
            <h1>
                Checkout (<Link to="/checkout">{basket?basket.length : '0'} items</Link>)
            </h1>
            {/*payment section - delivery address*/}
            <Payment.Section>
                <Payment.Title>
                    {/*h3 inside*/}
                    <h3>Delivery Address</h3>
                </Payment.Title>

                <Payment.Address>
                    <p>{user?.email}</p>
                    <p>123 react Lane</p>
                    <p>Los Angeles, CA</p>
                </Payment.Address>

            </Payment.Section>
            
            {/*payment section -Review Items*/}
            <Payment.Section>
                <Payment.Title>
                    <h3>Review items and delivery</h3>
                </Payment.Title>

                <Payment.Item>
                    {/*all products in the basket*/}
                    <FlipMove enterAnimation="elevator" leaveAnimation="fade" >
                    {basket?.map((item: any) => (
                            <CheckOutProductContainer 
                            id={item.id}
                            onClick={() => deleteItem(item.id, item.price)} 
                            key={item.id}
                            title={item.title} 
                            image={item.image} 
                            price={item.price} 
                            rating={item.rating} 
                            quantity={item.quantity}/>)
                        )}
                    </FlipMove>
                </Payment.Item>
            </Payment.Section>
            
            {/*payment section - Payment method*/}
            <Payment.Section>
                <Payment.Title>
                    <h3>Review items and delivery</h3>
                </Payment.Title>

                <Payment.Details>
                    {/* stripe magic will go here*/}
                </Payment.Details>
            </Payment.Section>

        </Payment.Frame>
    </Payment>
    );
}
 
export default PaymentContainer;