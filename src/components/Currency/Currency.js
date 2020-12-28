import React from 'react';
import CurrencyFormat from "react-currency-format";
import './Currency.css';

const CurrencyContainer = (amount) => {
    console.log(amount);
    return (  

        <CurrencyFormat
        renderText={(value) => (
            <h3>Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={amount.amount /100} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
    /> 
    );
}
 
export default CurrencyContainer;