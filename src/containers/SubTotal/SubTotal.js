import React from 'react'
import SubTotal from '../../components/SubTotal';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
const SubTotalContainer = () => {
    const price = useSelector((stateCurrent) => stateCurrent.App.totalPrice);
    const length = useSelector((stateCurrent) => stateCurrent.App.quantityItems);
    const history = useHistory();
    return (  
        <SubTotal>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p style={{'font-size': '12px', 'text-align': 'left', 'margin-bottom': '7px'}}>
                        Subtotal ( {`${length} items`}): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={price } 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <SubTotal.Button onClick={() => history.push('/payment') }>Proceed To Checkout</SubTotal.Button> 
        </SubTotal>
    );
}
 
export default SubTotalContainer;