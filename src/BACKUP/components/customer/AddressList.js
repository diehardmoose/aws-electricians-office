import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';

import AddressCard from '../../../src/components/customer/AddressCard';
import products from '../../../src/__mocks__/products';
import addresses from '../../../src/__mocks__/address';

const AddressList = () => (
  <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {addresses.map((address) => (
              <Grid
                item
                key={address.id}
                lg={4}
                md={6}
                xs={12}
              >
                <AddressCard address={address} pagetype='View'/>
              </Grid>
            ))}
              <Grid
                item
                
                lg={4}
                md={6}
                xs={12}
              >
                
                <AddressCard address={null} pagetype='New'/>
            </Grid>            
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
        
        </Box>
      </Container>
    </Box>
  </>
);

export default AddressList;
