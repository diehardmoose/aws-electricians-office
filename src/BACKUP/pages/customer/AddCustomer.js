import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import CustomerAddDetails from '../../../src/components/customer/CustomerAddDetails';

const AddCustomer = () => (
  <>
    <Helmet>
      <title>Add Customer | The Electriciancs Office</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <CustomerAddDetails />
      </Container>
    </Box>
  </>
);

export default AddCustomer;