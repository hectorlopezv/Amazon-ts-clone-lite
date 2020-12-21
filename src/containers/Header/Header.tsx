import React from 'react';
import Header from '../../components/Header';

export interface HeaderContainerProps {
    
}
 
const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    return (
        <Header >
            <Header.Link to="/">
                <Header.Logo src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo"/>
            </Header.Link>
            
            <Header.Search>
                <Header.Input />
                <Header.SearchIcon/>
                
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

                <Header.Link to="/checkout">
                    <Header.Basket />
                </Header.Link>

            </Header.Nav>

        </Header>


      );
}
 
export default HeaderContainer;