import React from 'react'
import Home from '../../components/Home';

export interface HomeContainerProps {
    
}
 
const HomeContainer: React.FC<HomeContainerProps> = () => {
    return (  
        <Home>
            Hello Baby
        </Home>
    );
}
 
export default HomeContainer;