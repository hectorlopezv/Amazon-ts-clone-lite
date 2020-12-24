import React from 'react';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {auth} from '../../lib/firebase.prod';
export interface HeaderContainerProps {
    
}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const user = useSelector((stateCurrent: any) => stateCurrent.User)
    const handlerAuth = () => {
        if(user){
            //login
            auth.signOut();
        }
        else {
            //logout
        }
    }
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

                <Header.Link to={!user ? "/login": '/'}>
                    <Header.Option onClick={handlerAuth}>
                        <Header.SpanOne>{`Hello, ${user? user.displayName : 'guests'}`}</Header.SpanOne>
                        <Header.SpanTwo>{user? 'Sign Out':'Sign In'}</Header.SpanTwo>
                    </Header.Option>
                </Header.Link>
       

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