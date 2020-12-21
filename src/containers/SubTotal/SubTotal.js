import React from 'react'
import SubTotal from '../../components/SubTotal';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';
import {useSelector} from 'react-redux';

const SubTotalContainer = () => {
    const price = useSelector((stateCurrent) => stateCurrent.App.totalPrice);
    const length = useSelector((stateCurrent) => stateCurrent.App.quantityItems);

    return (  
        <SubTotal>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                        Subtotal ( {`${length} items`}): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={price} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <SubTotal.Button>the following text</SubTotal.Button>
        </SubTotal>
    );
}
 
export default SubTotalContainer;