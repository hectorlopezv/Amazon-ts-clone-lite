import React from 'react'
import {Container, Button as Sbutton} from './styles/SubTotal';




export interface ButtonProps {
    
}
 
const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (  <Sbutton {...props}>{children}</Sbutton>);
}
 

interface CompoundComponets {
    Button: React.FC<ButtonProps>;
}

export interface SubTotalProps {
    
}
 
const SubTotal: React.FC<SubTotalProps> & CompoundComponets = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}

SubTotal.Button = Button;
export default SubTotal;