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
import { Company } from "../../models";

const CreateCompany = (props) => {
  const [values, setValues] = useState({
    companyName: '',
    empty: ''
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
    //const {idToken} = await Auth.currentSession();
    // get the tenant custom attribute from the id token
    //const company = idToken.payload['custom:companyID'];

    DataStore.save(
      new Company({
        name : values.companyName
      })
    );
    //props.history.push('/');
  }

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Please create a new company.."
          title="Create Company"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Company Name"
            margin="normal"
            name="companyName"
            onChange={handleChange}
            type="text"
            value={values.companyName}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Empty"
            margin="normal"
            name="empty"
            onChange={handleChange}
            type="text"
            value={values.empty}
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

export default CreateCompany;