import React, {useState, useEffect} from 'react';
import Payment from '../../components/Payment';
import CheckOutProductContainer from '../CheckOut/CheckOutProduct/CheckOutProduct';
import {useDispatch, useSelector} from 'react-redux';
import { deleteItemBasket, emptyBasket } from '../../store/Actions/App';
import FlipMove from 'react-flip-move';
import {Link} from 'react-router-dom';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
//get info from card(use elements), (usetripe) to use processing info and finishi transactions
import CurrencyFormat from 'react-currency-format';
import {useHistory} from 'react-router-dom';
import instance from '../../axios';
import {db } from '../../lib/firebase.prod';
const PaymentContainer= () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector((stateCurrent) => stateCurrent.User);
    const basket = useSelector((stateCurrent) => stateCurrent.App.basket);
    const deleteItem = (id, price) => dispatch(deleteItemBasket(id, price));
    const stripe = useStripe();//get stripe object
    const elements = useElements();
    const [Error, setError] = useState(null);
    const [Disabled, setDisabled] = useState(true);

    const [processing, setprocessing] = useState("");
    const [succeeded, setsucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);
    const totalOrder = useSelector(stateCurrent => stateCurrent.App.totalPrice);
    const empty_basket = () => dispatch(emptyBasket());
    //get secret after rendering the components in the first cycle
    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        //when basket items changes because total changes
        const getClientSecret = async () => {
            //client secret to charge the customer
            console.log(totalOrder)
            if (totalOrder < 1)return;
            const response = await instance({
                method: 'post',
                //stripe expects the total in a currencies subunits
                url: `/payments/create?total=${Math.trunc(totalOrder*100)}`,
            });
            console.log(response)
            setclientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket, totalOrder]);

    const handleSubmit = async (event) => {
        //handle strypejs stuff
        event.preventDefault();
        //protect if user is not sign in
        const user_check =  user ?? 1;
        if(user_check === 1)return;//if user is not login.


        //promise process is doing
        setprocessing(true);

        //Preprocessing using the hooks for getting the information from the card
        //  and confirm payment
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then((response) => {
            console.log('entro el thenn del handle')
            const {paymentIntent} = response;

            //push it to the store
            console.log('el user', user.uid);
            console.log('el response', response);
       
            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({//add info to doc
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })




            setsucceeded(true);
            setError(null);
            setprocessing(false);
            empty_basket();
            //processing || Disabled || succeeded
            history.replace('/orders');//replace previos page to prevent loop
            //prevent to come back to previos page
        }).catch((error) => {
            setsucceeded(false);
            setError(error.message);
            setprocessing(false);
        })

    }

    const handleChange = (event) => {
        //handles changes in card details
        //listen change sin card element
        //display any errors ast he customer types their card deitals
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");
    }

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
                    {basket?.map((item) => (
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
                    <h3>Payment Method</h3>
                </Payment.Title>

                <Payment.Details>
                    {/* stripe magic will go here*/}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                            <Payment.Price>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={totalOrder} 
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <Payment.Button disabled={processing || Disabled || succeeded}>
                                    <span>{processing ? <p>Proccessing</p> : "Buy Now"}</span>
                                </Payment.Button>
                            </Payment.Price>

                        {/*error*/}
                        {Error && <div>{Error}</div>}
                    </form>
                </Payment.Details>
            </Payment.Section>

        </Payment.Frame>
    </Payment>
    );
}
 
export default PaymentContainer;