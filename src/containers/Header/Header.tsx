import React from 'react';
import Header from '../../components/Header';

export interface HeaderContainerProps {
    
}
 
const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    return (
        <Header >
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            
            <Header.Search>
                <Header.Input />
            </Header.Search>
           
            <Header.Nav>
                <Header.Option>
                    <Header.SpanOne>Hello</Header.SpanOne>
                    <Header.SpanTwo>Sign in</Header.SpanTwo>
                </Header.Option>

                <Header.Option>
                    <Header.SpanOne>Returns</Header.SpanOne>
                    <Header.SpanTwo>& Orders</Header.SpanTwo>
                </Header.Option>

                <Header.Option>
                    <Header.SpanOne>Your</Header.SpanOne>
                    <Header.SpanTwo>Prime</Header.SpanTwo>
                </Header.Option>

                <Header.Option>
                    <Header.SpanOne></Header.SpanOne>
                    <Header.SpanTwo></Header.SpanTwo>
                </Header.Option>
            </Header.Nav>

        </Header>


      );
}
 
export default HeaderContainer;