import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { store } from './_helpers';
import { Provider } from 'react-redux';
import App from './App';
import ProductDetail from './_pages/productDetail'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

          <Provider store={store}>
              <Router>
                  <Routes>
                      <Route path="/"  element={<App/>} />
                      <Route path="/product/:id"  element={<ProductDetail/>} />
                  </Routes>
              </Router>
          </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
