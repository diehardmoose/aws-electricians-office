import React from 'react'
import { NavLink } from 'react-router-dom'

import { Auth } from 'aws-amplify';




const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Customer</NavLink></li>
            <li><NavLink to='/'>Certificate</NavLink></li>
            <li><NavLink to='/'>Invoice</NavLink></li>
            <li><NavLink to='/QuoteDashboard'>Quote</NavLink></li>
            <li><a onClick={() => Auth.signOut()} >Log Out</a></li>
            
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>MS</NavLink></li>
        </ul>

    )
}


export default SignedInLinks