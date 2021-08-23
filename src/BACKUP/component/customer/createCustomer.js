import React, { Component } from 'react'

export class createCustomer extends Component {
    
    render() {
        return (
            <div className="container">
         
            <div className="row">
                <form   className="White">
                    <h5 className="grey-text text-darken-3">Create Customer</h5>
                    <div className="input-field">
                        <label htmlFor="name" className="active">Forename</label>
                        <input type="text" id="name" Value="name"  />

                    </div>
                    <div className="input-field">
                        <label htmlFor="surname" className="active">Surname</label>
                        <input type="text" id="surname" Value="surname"   />

                    </div>
                    <div className="input-field">
                        <button className="btn green lighten-1 z-depth-0">Create</button>

                    </div>
                </form>
            </div>

        </div>
        )
    }
}

export default createCustomer
