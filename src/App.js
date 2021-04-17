import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore'
import { Company, Message} from './models'




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
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth ! </h1>
      </header>

      <button onClick={fetchUserInfo} >Show company</button>
      <button onClick={setCompany} >Set company</button>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
