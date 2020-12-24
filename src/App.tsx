import React from 'react';
import "./App.css";
import HeaderContainer from './containers/Header/Header';
import HomeContainer from './containers/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOutContainer from './containers/CheckOut/CheckOut';

import LoginForm from './containers/Login/LoginForm';
import useAuth from './hooks/useAuth';
export interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const [user] = useAuth();
  return (
    <Router>
      <div className="app">
        <Switch>
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
            </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

