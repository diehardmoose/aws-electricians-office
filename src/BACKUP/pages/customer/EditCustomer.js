import { Helmet } from "react-helmet";
import { Box, Container } from "@material-ui/core";
import CustomerEditDetails from "../../../src/components/customer/CustomerEditDetails";
import { useParams } from "react-router-dom";
import AddressList from '../../components/customer/AddressList';

const EditCustomer = () => {
    const params = useParams()

    return (
    <>
      <Helmet>
        <title>Edit Customer | The Electriciancs Office</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container maxWidth="lg">
          <CustomerEditDetails id={params.id} />
          <AddressList />
        </Container>
      </Box>
    </>
  );
};

export default EditCustomer;
