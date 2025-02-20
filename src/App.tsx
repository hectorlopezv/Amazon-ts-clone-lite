import React from 'react';
import "./App.css";
import HeaderContainer from './containers/Header/Header';
import HomeContainer from './containers/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOutContainer from './containers/CheckOut/CheckOut';
import FooterContainer from './containers/Footer/Footer';
import LoginForm from './containers/Login/LoginForm';
import useAuth from './hooks/useAuth';
import OrderContainer from './containers/Order/Order';
import PaymentContainer from './containers/Payment/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import IsUserRedirect, {ProtectedRoute} from './utils/routes';
export interface AppProps {

}
const stripePromise = loadStripe("pk_test_51I1m2jHKRERovIHLd2R7ojfZ81w0lw0noe30D1tI0uHoRIIwYNEhSjjYfzBOACoFXJEeRKmdcRzZVT0hwtLahYvv00iBIpjMRN");

const App: React.FC<AppProps> = () => {
  const [user] = useAuth();
  return (
    <Router>
      <div className="app">
        <Switch>
            
            <Route exact path="/orders">
              <HeaderContainer />
              <OrderContainer />
            </Route>
            <ProtectedRoute user={user} path="/payment" exact={true} >
                <HeaderContainer />

                <Elements stripe={stripePromise}>
                  <PaymentContainer />
                </Elements>

            </ProtectedRoute>

            
            <Route exact path="/checkout">
              <HeaderContainer />
              <CheckOutContainer />
            </Route>
            
            <Route exact path="/login">
                <LoginForm subscription={{ submitting: true, pristine: true }} />
            </Route>

            <Route exact path="/">
              <HeaderContainer />
              <HomeContainer />
              <FooterContainer />
            </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

