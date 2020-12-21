import React from 'react'

import CheckOut from '../../components/CheckOut';
import SubTotalContainer from '../../containers/SubTotal/SubTotal';

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

                <SubTotalContainer />
                
            </CheckOut.Right>
        </CheckOut>

    );
}

export default CheckOutContainer;