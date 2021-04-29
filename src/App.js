import React, { useEffect, useState } from 'react'

import './App.css';
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth, API, Hub } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore'
import { Company, Customer} from './models'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import CustomerDashboard from './component/customer/customerDashboard'
import UpdateCustomer from './component/customer/updateCustomer'
import SignIn from './component/auth/signIn'






function App() {

  const [authState, updateAuthState] = useState('Checking')


  const [user, updateUser] = useState(null)
  
  useEffect(() =>{
      updateAuthState('Checking')
      checkUser()
      setAuthListener()
      
      //links = user ? <SignedInLinks  /> : <SignedOutLinks />
  },[])

  async function checkUser(){
      try{
          const user = await Auth.currentAuthenticatedUser()
          updateAuthState('LoggedIn')
          updateUser(user)

      } catch (err){
          updateAuthState('LoggedOut')
          updateUser(null)
      }

  }

  async function setAuthListener() {
      Hub.listen('auth', (data) => {
          switch (data.payload.event) {
              case 'signIn':
                  updateAuthState('LoggedIn')
                  checkUser()
              break;
              case 'signOut':
                  DataStore.clear();
                  updateAuthState('LoggedOut')
                  checkUser()
              break;                
          }
      });
  }



  async function fetchUserInfo(setCompany) {
    // get the id token of the signed in user
    const {idToken} = await Auth.currentSession();
    // get the tenant custom attribute from the id token
    const company = idToken.payload['custom:companyID'];
    console.log(company)
    console.log(idToken)
  
    //setTenant(tenant);
  }

  let nextToken;

  async function listEditors(limit){
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let myInit = { 
        queryStringParameters: {
          "groupname": "",
          "limit": limit,
          "token": nextToken
        },
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }
    }
    const { NextToken, ...rest } =  await API.get(apiName, path, myInit);
    nextToken = NextToken;
    console.log(rest)
    return rest;
  }
  
  async function setCompany(setCompany) {

    // create company
    const newCompany = await DataStore.save(
      new Company({
        name: "My First Company"
      })
    );    

    //update user details
    const user = await Auth.currentAuthenticatedUser();
    Auth.updateUserAttributes(user, { 'custom:companyID': newCompany.id } )
    .then(result =>{ console.log(result)})
    .catch(err => console.log(err));  
    //setTenant(tenant);
  }

  async function createCustomer() {

    // create company
    const newCustomer = await DataStore.save(
      new Customer({
        name: "Tom",
        surname: "Stone",
        companyID:'0'
      })
    );   
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar authState={authState} />
        <button onClick={fetchUserInfo} >Show company</button>
        <button onClick={setCompany} >Set company</button>
        <button onClick={createCustomer} >Create Customer</button>
        <button onClick={ () => listEditors(10)} >User list</button>        
        <Switch>
        
            <Route exact path='/' render={() =>  <CustomerDashboard authState={authState}  />         } />
            <Route path='/signin' component={SignIn} />
            <Route path='/updatecustomer/:id' component={UpdateCustomer} />                                
            {/*
            <Route path='/signup' component={SignUp} />
            <Route path='/createcustomer' component={CreateCustomer} />          
            <Route path='/updatecustomer/:id' component={UpdateCustomer} />      */}              
          </Switch>      



        
      </div>
    </BrowserRouter>      
  );
}

//export default withAuthenticator(App);
export default App;
