import React, { Component } from 'react'
import CustomerList from './customerList'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { withAuthenticator } from '@aws-amplify/ui-react'

class CustomerDashboard extends Component{
    render(){

        const customers =''
        //const {customers, auth } = this.props
        
        //if (!auth.isLoaded) return <div>Loading...</div>        
        //if (!auth.uid) return <Redirect to='/signin' />

        return(
            <div className="customerdash container">
                <div className="row">
                    <div className="col s12 m6">
                    <CustomerList customers={customers} />
                    </div>
                    <div className="col s12 m6 ">
                    <NavLink to='/createcustomer'><a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a></NavLink>
                    
                    </div>
                </div>
            </div>
        )
    }
}



//export default CustomerDashboard
export default withAuthenticator(CustomerDashboard);