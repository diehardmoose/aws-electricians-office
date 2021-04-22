import React from 'react'
import { Link } from 'react-router-dom'

const CustomerList = ({customers}) => {
      return (
        
        <div>
            
        <ul className="collection">
        { customers  && customers.map(customer => {

          return(
            <li key={customer.id} className="collection-item avatar">
              {/*<i class="material-icons circle green">MM</i>*/}
              <i className="material-icons circle green">insert_chart</i>

              
              <span className="title">{customer.forename} {customer.surname}</span>
              <p>{customer.email}<br/>
              {customer.phone}
              </p>
              <Link to={'/updatecustomer/' + customer.id}> 
                <i className="material-icons">edit</i>
              </Link>
            </li>
          )
        })}  

      </ul>
      </div>
    )
}
export default CustomerList