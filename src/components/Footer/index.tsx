import React from 'react';
import {Link as Link_, Row as Frow, Text as Ftext, Container, Col as Fcol, Title as Ftile} from './styles/Footer';




export interface LinkProps {
    href: string;
}
 
const Link: React.FC<LinkProps> = ({children, ...props}) => {
    // eslint-disable-next-line react/jsx-pascal-case
    return (  <Link_ {...props}>{children}</Link_> );
}
 

export interface RowProps {
    
}
 
const Row: React.FC<RowProps> = ({children, ...props}) => {
    return (<Frow {...props}>{children}</Frow>  );
}

export interface TextProps {
    
}

const Text: React.FC<TextProps> = ({children, ...props}) => {
    return (  <Ftext {...props}>{children}</Ftext>);
}
 

export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return ( 
        <Ftile {...props}>{children}</Ftile>
     );
}
 
export interface ColProps {
    
}
 
const Col: React.FC<ColProps> = ({children, ...props}) => {
    return (  <Fcol {...props}>{children}</Fcol>);
}
 
export interface CompoundComponets {
    Col: React.FC<ColProps>;
    Title: React.FC<TitleProps>;
    Text: React.FC<TextProps>;
    Row: React.FC<RowProps>;
    Link: React.FC<LinkProps>;
}
export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> & CompoundComponets = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}
Footer.Col = Col;
Footer.Title = Title;
Footer.Text = Text;
Footer.Row = Row;
Footer.Link = Link;

export default Footer;