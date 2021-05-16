import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';
import { Auth } from 'aws-amplify';
import { DataStore } from "@aws-amplify/datastore";
import { Customer } from "../../models";

const CustomerAddDetails = (props) => {
  const [values, setValues] = useState({
    forename: '',
    surname: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  async function handleSubmit(e) {
    e.preventDefault();
    //const navigate = useNavigate();
    //console.log(params.id)
    //const original = await DataStore.query(Customer, props.id);
    //console.log(original)
    const {idToken} = await Auth.currentSession();
    // get the tenant custom attribute from the id token
    const company = idToken.payload['custom:companyID'];

    DataStore.save(
      new Customer({
        name : values.forename,
        surname : values.surname,
        companyID : company
      })
    );
    //props.history.push('/');
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Please add new customers details.."
          title="Add customer"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Forename"
            margin="normal"
            name="forename"
            onChange={handleChange}
            type="text"
            value={values.forename}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Surname"
            margin="normal"
            name="surname"
            onChange={handleChange}
            type="text"
            value={values.surname}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
          >
            Create
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default CustomerAddDetails;