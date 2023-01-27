import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
//import myLogger from './middlewares/myLogger'; //우리가 만든거(핸드메이드)
import logger from 'redux-logger';// 설치한 미들웨어


//스토어 만들기
const store =createStore(rootReducer, applyMiddleware(logger)); 
// 미들웨어를 사용할때 매개변수로 applyMiddleware를 넣어준다
console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
