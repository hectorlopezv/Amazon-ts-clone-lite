import React from 'react';
import {Container, 
    Title as Ptitle, 
    Item as Pitem,
    Address as Paddress,
    Section as Psection,
    Frame as Pframe,
    Details as Pdetails
} from './styles/Payment';

export interface DetailsProps {
    
}
 
const Details: React.FC<DetailsProps> = ({children, ...props}) => {
    return (<Pdetails {...props}>{children}</Pdetails>  );
}
 

export interface FrameProps {
    
}
 
const Frame: React.FC<FrameProps> = ({children, ...props}) => {
    return ( <Pframe {...props}>{children}</Pframe> );
}
 
export interface SectionProps {
    
}
 
const Section: React.FC<SectionProps> = ({children, ...props}) => {
    return (    <Psection {...props}>{children}</Psection> );
}
 

export interface AddressProps {
    
}
 
const Address: React.FC<AddressProps> = ({children, ...props}) => {
    return (   <Paddress {...props}>{children}</Paddress> );
}
 

export interface ItemProps {
    
}
 
const Item: React.FC<ItemProps> = ({children, ...props}) => {
    return (  <Pitem {...props}>{children}</Pitem>);
}
 

export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Ptitle {...props}>{children}</Ptitle>);
}



/////////////////////////////////////////////////////////////////////////
interface CompoundComponets {
    Title: React.FC<TitleProps>;
    Item: React.FC<ItemProps>;
    Address: React.FC<AddressProps>;
    Section: React.FC<SectionProps>;
    Frame: React.FC<FrameProps>;
    Details: React.FC<DetailsProps>;
}
export interface PaymentProps {
    
}
 
const Payment: React.FC<PaymentProps> & CompoundComponets = ({children, ...props}) => {
    return (<Container {...props}>{children}</Container>  );
}
Payment.Title = Title;
Payment.Item = Item;
Payment.Address = Address;
Payment.Section = Section;
Payment.Frame = Frame;
Payment.Details = Details;
export default Payment;