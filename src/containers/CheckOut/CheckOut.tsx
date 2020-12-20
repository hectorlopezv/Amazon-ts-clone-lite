import React from 'react'

import CheckOut from '../../components/CheckOut';

export interface CheckOutContainerProps {
    
}
 
const CheckOutContainer: React.FC<CheckOutContainerProps> = () => {
    return ( 

        <CheckOut>
            <CheckOut.Left>
                <CheckOut.Image 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt=""
                />
                <CheckOut.Title>Your Shopping Basket</CheckOut.Title>
                {/*Basket Item */}
            </CheckOut.Left>

            <CheckOut.Right>
                <CheckOut.Title>The Subtotal will go here</CheckOut.Title>
                
            </CheckOut.Right>
        </CheckOut>

    );
}

export default CheckOutContainer;