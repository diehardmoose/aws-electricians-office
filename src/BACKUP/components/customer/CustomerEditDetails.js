import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from "@material-ui/core";

import { DataStore } from "@aws-amplify/datastore";
import { Customer } from "../../models";
//import {useNavigate} from 'react-router-dom';

const CustomerEditDetails = (props) => {
  const [values, setValues] = useState({
    forename: "",
    surname: "",
  });

  async function getCustomer(id) {
    const original = await DataStore.query(Customer, id);
    setValues({
      ...values,
      forename: original.name,
      surname: original.surname,
    });
    //updateCustomer(original);
    //console.log('getcust')
    //console.log(original);
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    //const navigate = useNavigate();
    //console.log(params.id)
    const original = await DataStore.query(Customer, props.id);
    //console.log(original)

    DataStore.save(
      Customer.copyOf(original, (updated) => {
        updated.name = values.forename;
        updated.surname = values.surname;
      })
    );

    //props.history.push('/');
  }

  async function deleteCustomer(e) {

    const original = await DataStore.query(Customer, props.id);
    DataStore.delete(original);

  }

  useEffect(() => {
    getCustomer(props.id);
  }, []);

  return (
    <form  {...props}>
      <Card>
        <CardHeader
          subheader="Please update customers details and save"
          title="Edit customer "
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
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button sx={{ mx: 1 }} onClick={deleteCustomer}  color="error" variant="contained">
            Delete
          </Button>            
          <Button onClick={handleSubmit}  color="primary" variant="contained">
            Save
          </Button>
        </Box>
      </Card>
    </form>

  );
};

export default CustomerEditDetails;
