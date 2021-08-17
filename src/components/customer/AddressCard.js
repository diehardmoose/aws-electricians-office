import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import {
  Button,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const AddressCard = ({ address,pagetype, ...rest }) => 
{
  const [pageState, setpageState] = useState(pagetype);

if (!address){
  return null;
}
return(
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
      </Box>
      {address!=null &&
      <Typography align="left" color="textPrimary" gutterBottom variant="h5">
        {address.name}
      </Typography>
      }
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {address!=null ? address.address1 :'Address1'}
      </Typography>

      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {address!=null ?address.address2 :'Address2'}
      </Typography>
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {address!=null ? address.city:'city'}
      </Typography>
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {address!=null ?address.county:'County'}
      </Typography>
      <Typography
        align="left"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {address!=null ?address.postcode :'postcode'}
      </Typography>      
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >

        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          {pageState=='View' ? <Button onClick={() => setpageState('Edit')}  color="primary" variant="contained">Edit</Button> 
                              :pageState=='New' ? <Button onClick={() => setpageState('View')}  color="primary" variant="contained">Create</Button>
                              :<Button onClick={() => setpageState('View')}  color="primary" variant="contained">Save</Button>}


        </Grid>
      </Grid>
    </Box>
  </Card>
);

AddressCard.propTypes = {
    address: PropTypes.object.isRequired
};
};
export default AddressCard;
