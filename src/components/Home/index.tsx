import React from 'react'

import { Container } from './styles/Home';
export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = ({children, ...props}) => {
    return ( <Container {...props}>{children}</Container> );
}

export default Home;