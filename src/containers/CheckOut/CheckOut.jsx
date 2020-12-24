import React from 'react'
import CheckOutProductContainer from './CheckOutProduct/CheckOutProduct';
import CheckOut from '../../components/CheckOut';
import SubTotalContainer from '../SubTotal/SubTotal';
import {useSelector, useDispatch} from 'react-redux';
import {deleteItemBasket} from '../../store/Actions/App';
import FlipMove from 'react-flip-move';

 
const CheckOutContainer  = () => {
    const basket = useSelector((stateCurrent) =>  stateCurrent.App.basket);
    const dispatch = useDispatch();
    const deleteItem = (id, price) => dispatch(deleteItemBasket(id, price));

    return ( 

        <CheckOut>
            <CheckOut.Left>
                <CheckOut.Image 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt=""
                />
                <CheckOut.Title>Your Shopping Basket</CheckOut.Title>
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
                
            </CheckOut.Left>



            <CheckOut.Right>

                <SubTotalContainer />
                
            </CheckOut.Right>
        </CheckOut>

    );
}

export default CheckOutContainer;