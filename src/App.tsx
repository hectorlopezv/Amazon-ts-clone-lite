import React from 'react';
import "./App.css";
import HeaderContainer from './containers/Header/Header';
import HomeContainer from './containers/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CheckOutContainer from './containers/CheckOut/CheckOut';
export interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route exact path="/checkout">
              <HeaderContainer />
              <CheckOutContainer />
              
            </Route>
            
            <Route exact path="/login">
                <h1>Login</h1>
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

