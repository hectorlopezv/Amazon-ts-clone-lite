import React from 'react';
import "./App.css";
import HeaderContainer from './containers/Header/Header';
import HomeContainer from './containers/Home/Home';
export interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;

