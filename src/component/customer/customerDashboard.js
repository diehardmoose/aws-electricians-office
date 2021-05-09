import React, { useEffect, useState } from 'react'
import CustomerList from './customerList'
import { Redirect, withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import { withAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from '@aws-amplify/datastore'
import { Customer } from '../../models'

const CustomerDashboard  = ({authState}) => {

    const [customers, updateCustomers] = useState([])    
        //const customers =''
        //const {customers, auth } = this.props

        useEffect(() => { 
        //    console.log('test')
            fetchCustomers()
            const subscription = DataStore.observe(Customer).subscribe(() => fetchCustomers())
            return () => subscription.unsubscribe();
          },[]);

        async function fetchCustomers() {
            const lclcustomers = await DataStore.query(Customer)
            //console.log(customers)
            updateCustomers(lclcustomers)
            //fetchCustomers()
            //console.log(customers)
            //console.log('test')
          }
        
        //if (!auth.isLoaded) return <div>Loading...</div>        
        //if (!auth.uid) return <Redirect to='/signin' />
        if (authState == 'Checking') return <div>Loading...</div>        
        if (authState == 'LoggedOut') return <Redirect to='/signin' />

        return(
            <div className="customerdash container">
                <div className="row">
                    <h4>Customer list</h4>  
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



//export default CustomerDashboard
export default withRouter(CustomerDashboard);