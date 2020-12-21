import React from 'react'
import SubTotal from '../../components/SubTotal';
import CurrencyFormat from 'react-currency-format';
import './SubTotal.css';
 
const SubTotalContainer = () => {
    return (  
        <SubTotal>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    {/* Part of the homework */}
                        Subtotal (0 items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={0} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <SubTotal.Button>the following text</SubTotal.Button>
        </SubTotal>
    );
}
 
export default SubTotalContainer;