import React from 'react';
import {
    Container, 
    Search as HSearch, 
    Frame,
    Input as Hinput,
    Nav as Hnav,
    Option as Hoption,
    Option1,
    Option2,
    Logo as Hlogo,
    SearchIco as HsearchIcon,
    BasketIcon,
    Basket as Hbasket,
    BasketText,
} from './styles/Header';




export interface SearchProps {
    
}
 
const Search: React.FC<SearchProps> = ({children, ...props}) => {
    return ( <HSearch {...props}>{children} </HSearch> );
}


export interface NavProps {
    
}
 
const Nav: React.FC<NavProps> = ({children, ...props}) => {
    return ( <Hnav {...props}>{children} </Hnav> );
}

export interface OptionProps {
    
}
 
const Option: React.FC<OptionProps> = ({children, ...props}) => {
    return ( <Hoption {...props}>{children} </Hoption> );
}

export interface InputProps {
    
}
 
const Input: React.FC<InputProps> = ({...props}) => {
    return ( <Hinput {...props} /> );
}
 
export interface SpanProps {
    

}
 
const SpanOne: React.FC<SpanProps> = ({children, ...props}) => {
    return ( 
      <Option1 {...props}>{children}</Option1> 
    );
}

const SpanTwo: React.FC<SpanProps> = ({children, ...props}) => {
    return ( 
      <Option2 {...props}>{children}</Option2> 
    );
}

export interface LogoProps {
    src: string;
    alt: string;
}
 
const Logo: React.FC<LogoProps> = ({...props}) => {
    return (  
        <Hlogo {...props}/>
    );
}

export interface SearchIconProps {
    
}
 
const SearchIcon: React.FC<SearchIconProps> = () => {
    return (  
        <HsearchIcon />
    );
}
 
export interface BasketProps {
    
}
 
const Basket: React.FC<BasketProps> = ({children, ...props}) => {
    return ( 
        <Hbasket {...props}>
            <BasketIcon />
            <BasketText>0</BasketText>
        </Hbasket> 
      );
}

////////////////////////////////////////////////////////////////////////////////////////////////



export interface HeaderProps {
}

interface CompoundComponets {
    Search: React.FC<SearchProps>;
    Nav: React.FC<NavProps>;
    Option: React.FC<OptionProps>;
    Input: React.FC<InputProps>;
    SpanOne: React.FC<SpanProps>;
    SpanTwo: React.FC<SpanProps>;
    Logo: React.FC<LogoProps>;
    SearchIcon: React.FC<SearchIconProps>;
    Basket: React.FC<BasketProps>;
}

const Header: React.FC<HeaderProps> & CompoundComponets = ({children, ...props}) => {
    return (<Container {...props}>{children} </Container>  );
}
 


//styled components
Header.Search = Search;
Header.Nav = Nav;
Header.Option = Option;
Header.Input = Input;
Header.SpanOne = SpanOne;
Header.SpanTwo = SpanTwo;
Header.Logo = Logo;
Header.SearchIcon = SearchIcon;
Header.Basket = Basket;
export default Header;