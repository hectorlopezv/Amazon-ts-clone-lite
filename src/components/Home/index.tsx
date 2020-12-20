import React from 'react'

import { Container,Image as Himage, Frame as Hframe, Row as Hrow } from './styles/Home';

export interface FrameProps {
    
}
 
const Frame: React.FC<FrameProps> = ({children, ...props}) => {
    return (  <Hframe {...props}>{children}</Hframe>);
}

export interface ImageProps {
    src: string;
    alt: string;    
}
 
const Image: React.FC<ImageProps> = ({...props}) => {
    return (  <Himage {...props}/>);
}
 
export interface RowProps {
    
}
 
const Row: React.FC<RowProps> = ({children, ...props}) => {
    return ( <Hrow {...props}>{children}</Hrow> );
}
 

////////////////////////////////////////////////////////////////////////////////////////////////
interface CompoundComponets {
    Image: React.FC<ImageProps>;
    Frame: React.FC<FrameProps>;
    Row: React.FC<RowProps>;
}

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> & CompoundComponets= ({children, ...props}) => {
    return ( <Container {...props}>{children}</Container> );
}

Home.Image = Image;
Home.Frame = Frame;
Home.Row = Row;
export default Home;