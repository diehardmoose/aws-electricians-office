import React, { useEffect, useState } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
//import { useRoutes } from 'react-router-dom';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Auth, API, Hub } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const App = () => {
  const [authState, updateAuthState] = useState('Checking')
  //const routing = useRoutes(routes(authState));

  useEffect(() =>{
    //updateAuthState('Checking')
    updateAuthState('LoggedIn')
    checkUser()
    setAuthListener()
    
    //links = user ? <SignedInLinks  /> : <SignedOutLinks />
},[])

async function setAuthListener() {
  Hub.listen('auth', (data) => {
    //console.log(data.payload.event);
      switch (data.payload.event) {
    
          case 'signIn':
              console.log('Logged in');
              updateAuthState('LoggedIn')
              checkUser()
          break;
          case 'signOut':
              console.log('Logged OUT');
              DataStore.clear();
              updateAuthState('LoggedOut')
              checkUser()
          break;                
      }
  });
}

async function checkUser(){
  try{
      const user = await Auth.currentAuthenticatedUser()
      updateAuthState('LoggedIn')
      //updateUser(user)

  } catch (err){
      updateAuthState('LoggedOut')
      //updateUser(null)
  }

}

  return (

    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props } authState={authState} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} authState={authState} />} />
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </BrowserRouter>

  );
};
 
export default App;
