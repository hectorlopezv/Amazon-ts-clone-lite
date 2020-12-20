import React from 'react'
import Home from '../../components/Home';
import ProductContainer from '../../containers/Product/Product';
export interface HomeContainerProps {
    
}
 
const HomeContainer: React.FC<HomeContainerProps> = () => {
    return (  
        <Home>
            <Home.Frame>
                <Home.Image  
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Background Image"
                />
                <Home.Row>
                    <ProductContainer />
                    {/*Product*/}
                    {/*Product*/}
                </Home.Row>


            </Home.Frame>
        </Home>
    );
}
 
export default HomeContainer;