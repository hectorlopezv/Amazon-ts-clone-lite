import React from 'react'
import CheckOutProductContainer from './CheckOutProduct/CheckOutProduct';
import CheckOut from '../../components/CheckOut';
import SubTotalContainer from '../../containers/SubTotal/SubTotal';
import {useSelector, useDispatch} from 'react-redux';
import {deleteItemBasket} from '../../store/Actions/App';

export interface CheckOutContainerProps {
    
}
 
const CheckOutContainer: React.FC<CheckOutContainerProps> = () => {
    const basket = useSelector((stateCurrent: any) =>  stateCurrent.App.basket);
    const dispatch = useDispatch();
    const deleteItem = (id: string, price: string) => dispatch(deleteItemBasket(id, price));

    return ( 

        <CheckOut>
            <CheckOut.Left>
                <CheckOut.Image 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt=""
                />
                <CheckOut.Title>Your Shopping Basket</CheckOut.Title>
                {/*Basket Item */}
                {basket?.map((item: any) => (
                    <CheckOutProductContainer 
                    onClick={() => deleteItem(item.id, item.price)} 
                    key={item.id} id={item.id} 
                    title={item.title} 
                    image={item.image} 
                    price={item.price} 
                    rating={item.rating} 
                    quantity={item.quantity}/>
                ))}
                
            </CheckOut.Left>



            <CheckOut.Right>

                <SubTotalContainer />
                
            </CheckOut.Right>
        </CheckOut>

    );
}

export default CheckOutContainer;