import React from 'react';
import {Container, Button as Lbutton, Input as Linput,
    Image as Limage, Frame, Title as Ltitle, Label as Llabel, Text as Ltext } from './styles/Login';


export interface InputProps {
    
}
 
const Input: React.FC<InputProps> = ({...props}) => {
    return (  <Linput {...props}/>);
}
 

export interface ButtonProps {
    type: string | any;
    disabled: boolean;
    onClick?: any;
}

const Button: React.FC<ButtonProps> = ({children, ...props}) => {
    return (  <Lbutton {...props}>{children}</Lbutton>);
}
 


export interface TextProps {
    
}
 
const Text: React.FC<TextProps> = ({children, ...props}) => {
    return (  <Ltext {...props}>{children}</Ltext>);
}
 
export interface LabelProps {
    
}
 
const Label: React.FC<LabelProps> = ({children, ...props}) => {
    return (<Llabel {...props}>{children}</Llabel>  );
}
 
export interface TitleProps {
    
}
 
const Title: React.FC<TitleProps> = ({children, ...props}) => {
    return (  <Ltitle {...props}>{children}</Ltitle>);
}
 
export interface LoginFrameProps {
    
}
 
const LoginFrame: React.FC<LoginFrameProps> = ({children, ...props}) => {
    return (  <Frame {...props}>{children}</Frame>);
}
 
export interface ImageProps {
    src: string;
    alt: string;
}
 
const Image: React.FC<ImageProps> = ({...props}) => {
    return (<Limage {...props}/>  );
}
 

interface CompoundComponets {
    Image: React.FC<ImageProps>;
    Title: React.FC<TitleProps>;
    Frame: React.FC<LoginFrameProps>;
    Label: React.FC<LabelProps>;
    Text: React.FC<TextProps>;
    Button: React.FC<ButtonProps>;
    Input: React.FC<InputProps>;
}
export interface LoginProps {
    
}
 
const Login: React.FC<LoginProps> & CompoundComponets = ({children, ...props}) => {
    return (  <Container {...props}>{children}</Container>);
}

Login.Image = Image;
Login.Frame = LoginFrame;
Login.Title = Title;
Login.Label = Label;
Login.Text = Text;
Login.Button = Button;
Login.Input = Input;
export default Login;