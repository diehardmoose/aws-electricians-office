import React, { useEffect, useState } from 'react'

import { useParams, } from 'react-router-dom'

import { DataStore } from '@aws-amplify/datastore'
import { Customer } from '../../models'


function UpdateCustomer() {

    const params = useParams()
    const [customer, updateCustomer] = useState([])    
    

    async function getCustomer(id){
        const original = await DataStore.query(Customer, id);
        updateCustomer(original);
        //console.log('getcust')
        //console.log(original)
    }

    function handleChange (e) {
        updateCustomer({...customer,
            [e.target.id]: e.target.value
        })
        console.log('updatecust ', e.target.id)
        console.log(customer)

    }    

    async function handleSubmit (e) {
        e.preventDefault();
        //console.log(params.id)
        const original =  await DataStore.query(Customer, params.id);
        //console.log(original)

         DataStore.save(
            Customer.copyOf(original, updated => {
                updated.name = customer.name
                updated.surname = customer.surname
            })
        );        
        //this.props.history.push('/')

    }    

    useEffect(() => {
        getCustomer(params.id);
    
        
    }, []);    

    return (
        <div className="container">
         
            <div className="row">
                <form  onSubmit={handleSubmit} className="White">
                    <h5 className="grey-text text-darken-3">Update Customer</h5>
                    <div className="input-field">
                        <label htmlFor="name" className="active">Forename</label>
                        <input type="text" id="name" Value={customer.name} onChange={handleChange} />

                    </div>
                    <div className="input-field">
                        <label htmlFor="surname" className="active">Surname</label>
                        <input type="text" id="surname" Value={customer.surname} onChange={handleChange}  />

                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Update</button>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default UpdateCustomer
