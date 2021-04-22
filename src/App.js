import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth, API } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore'
import { Company, Message} from './models'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './component/layout/Navbar'
import CustomerDashboard from './component/customer/customerDashboard'




function App() {

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

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <button onClick={fetchUserInfo} >Show company</button>
        <button onClick={setCompany} >Set company</button>
        <button onClick={ () => listEditors(10)} >User list</button>        
        <Switch>
        
            <Route exact path='/' component={CustomerDashboard} />
            {/*
            <Route path='/signin' component={SignIn} />
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
