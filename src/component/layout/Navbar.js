import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks' 

import { Auth, Hub } from 'aws-amplify'



const Navbar = (props) => {
    //const { auth, profile } = props;
    //const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    
    const [user, updateUser] = useState(null)
    const links = user ? <SignedInLinks  /> : <SignedOutLinks />

    useEffect(() =>{
        checkUser()
        setAuthListener()
        
        //links = user ? <SignedInLinks  /> : <SignedOutLinks />
    },[])

    async function checkUser(){
        try{
            const user = await Auth.currentAuthenticatedUser()
            updateUser(user)

        } catch (err){
            updateUser(null)
        }

    }

    async function setAuthListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'signIn':
                    checkUser()
                break;
                case 'signOut':
                    checkUser()
                break;                
            }
        });
    }

    //if (!user) return <Redirect to='/signin' />

    return (

        <nav>
            <div className="nav-wrapper blue darken-3">
                <a href="#" className="brand-logo left">The Electricians Office</a>
                {links}
            </div>
        </nav>        
 
        
        
    )
}


export default Navbar