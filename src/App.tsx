import React from 'react';
import "./App.css";
import HeaderContainer from './containers/Header/Header';

export interface AppProps {

}

const App: React.FC<AppProps> = () => {
  return (
    <div className="app">
      <HeaderContainer />
    </div>
  );
}

export default App;

