import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './globalStyles';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {AppReducer} from './store/Reducers/App';




const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  App: AppReducer
});

const composeEnchancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(rootReducer, composeEnchancers(
  applyMiddleware(sagaMiddleware),
));

//missing saga listener
//sagaMiddleware.run();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
