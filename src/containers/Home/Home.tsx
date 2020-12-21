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
                    <ProductContainer
                    id="49538094"  
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        price="19.99"
                        rating={2}
                    />
                    <ProductContainer
                    id="4903850"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        price="19.99"
                        rating={2}
                    />
                </Home.Row>

                <Home.Row>
                    <ProductContainer
                    id="23445930" 
                            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                            price="19.99"
                            rating={1}
                        />
                    <ProductContainer
                    id="3254354345"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        price="19.99"
                        rating={3}
                    />

                    <ProductContainer  
                     id="90829332"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                        price="19.99"
                        rating={5}
                    />
                </Home.Row>

                <Home.Row>
                    <ProductContainer
                      id="90829339"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        price="19.99"
                        rating={2}
                    />
                </Home.Row>

            </Home.Frame>
        </Home>
    );
}
 
export default HomeContainer;