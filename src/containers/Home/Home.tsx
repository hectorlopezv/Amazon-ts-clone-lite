import React from 'react'
import Home from '../../components/Home';
import ProductContainer from '../../containers/Product/Product';
import { useSpring, animated } from 'react-spring';
import {products_1,products_2, products_3} from '../../fixtures/Product';

export interface HomeContainerProps {
    
}


const HomeContainer: React.FC<HomeContainerProps> = () => {
    //add slider to images
    return (  
        <Home>
            <Home.Frame>
                <Home.Image  
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="Background Image"
                />
                <Home.Row>
                    {products_1.map((item: any) => (
                        <ProductContainer
                            key={item.id}
                            id={item.id} 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </Home.Row>
                <Home.Row>
                    {products_2.map((item: any) => (
                        <ProductContainer
                        key={item.id}
                            id={item.id} 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </Home.Row>

                <Home.Row>
                    {products_3.map((item: any) => (
                        <ProductContainer
                        key={item.id}
                            id={item.id} 
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </Home.Row>


            </Home.Frame>
        </Home>
    );
}
 
export default HomeContainer;