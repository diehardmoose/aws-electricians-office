import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import CreateCompany from "../../../src/components/settings/CreateCompany";
import AvailableCompanyList from "../../../src/components/settings/AvailableCompanyList";
import { useParams } from "react-router-dom";
import { DataStore } from "@aws-amplify/datastore";
import { Company } from "../../models";
import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

const CompanySettings = () => {
    const params = useParams()

    const [company, updateCompany] = useState([]);
    const [currentCompany, setCurrentCompany] = useState('');
    //const customers =''
    //const {customers, auth } = this.props
  
    useEffect(() => {
      //    console.log('test')
      fetchCompany();
      getCurrentCompany();

      const subscription = DataStore.observe(Company).subscribe(() =>
      fetchCompany()
      );
      return () => subscription.unsubscribe();
    }, []);
  
    async function fetchCompany() {
      const lclcompany = await DataStore.query(Company);
      //console.log(customers)
      updateCompany(lclcompany);
      //fetchCustomers()
      //console.log(customers)
      //console.log('test')
    }

    async function getCurrentCompany() {
        const {idToken} =  await Auth.currentSession();
        // get the tenant custom attribute from the id token
        const company = idToken.payload['custom:companyID'];
        setCurrentCompany(company);
      };    
    
    return (
    <>
      <Helmet>
        <title>Company Details | The Electriciancs Office</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <CreateCompany id={params.id} />
          <Box sx={{ pt: 3 }}>
              <AvailableCompanyList customers={company} companyID={currentCompany} />
          </Box>
          
        </Container>
      </Box>
    </>
  );
};

export default CompanySettings;