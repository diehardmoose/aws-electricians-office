import React, { useEffect, useState } from 'react'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from '../src/components/GlobalStyles'
import '../src/mixins/chartjs';
import theme from '../src/theme';
import routes from '../src/routes';
import { Auth, API, Hub } from 'aws-amplify';

const App = () => {
  const [authState, updateAuthState] = useState('Checking')
  const routing = useRoutes(routes(authState));

  useEffect(() =>{
    //updateAuthState('Checking')
    updateAuthState('LoggedIn')
    checkUser()
    setAuthListener()
    
    //links = user ? <SignedInLinks  /> : <SignedOutLinks />
},[])

async function setAuthListener() {
  Hub.listen('auth', (data) => {
      switch (data.payload.event) {
          case 'signIn':
              updateAuthState('LoggedIn')
              checkUser()
          break;
          case 'signOut':
              //DataStore.clear();
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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};
 
export default App;
