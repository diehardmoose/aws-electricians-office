import { Helmet } from "react-helmet";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@material-ui/core";
import CustomerListResults from "../../components/customer/CustomerListResults";
import CustomerListToolbar from "../../components/customer/CustomerListToolbar";
//import customers from '../../src/__mocks__/customers';
import { DataStore } from "@aws-amplify/datastore";
import { Customer } from "../../models";

const CustomerList = () => {
  const [customers, updateCustomers] = useState([]);
  //const customers =''
  //const {customers, auth } = this.props

  useEffect(() => {
    //    console.log('test')
    fetchCustomers();
    const subscription = DataStore.observe(Customer).subscribe(() =>
      fetchCustomers()
    );
    return () => subscription.unsubscribe();
  }, []);

  async function fetchCustomers() {
    const lclcustomers = await DataStore.query(Customer);
    //console.log(customers)
    updateCustomers(lclcustomers);
    //fetchCustomers()
    //console.log(customers)
    //console.log('test')
  }

  return (
    <>
      <Helmet>
        <title>Customers | The Electricians Office</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default CustomerList;
