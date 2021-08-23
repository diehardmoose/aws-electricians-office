/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from './app';

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from "redux-thunk";
import rootReducer from './Reducers'


import {Amplify,Auth,hub} from 'aws-amplify';
import config from './aws-exports';
import '@aws-amplify/ui/dist/style.css';


Amplify.configure({...config,
  graphql_headers: async () => {
    try {
      const session = await Auth.currentSession();
      const token = session.idToken.jwtToken;

      return { Authorization: token };
    } catch {}
  },  
});


//const initialState ={};
//const middleware = [thunk];

//const store = createStore(
//  rootReducer,
  //initialState,
//  applyMiddleware(...middleware)
//);

ReactDOM.render(
//  <Provider store={store}>
    <App />
//  </Provider>,
,
  document.getElementById("root")
);
