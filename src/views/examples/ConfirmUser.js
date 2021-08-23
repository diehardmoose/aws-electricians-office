/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert,
} from "reactstrap";



import React, { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';

import { Auth } from 'aws-amplify';



const ConfirmUser = () => {
  const params = useParams();

  const [formData, setFormData] = useState({
    email: params.id,
    code: ''
  });

  const { email, code } = formData;
  const [errMessage,setErrMessage] = useState([]);
  const [confirmSuccess,setConfirmSuccess] = useState(false);

  const onChange = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
      e.preventDefault();
      //signIn();
      //login(email, password);
  };

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(email, code);
      setConfirmSuccess(true);
      
    } catch (error) {
        setErrMessage(error.message);
        console.log('error confirming sign up', error);
    }
  }

  async function resendConfirmationCode() {
    console.log(email);
    try {
        await Auth.resendSignUp(email);
        console.log('code resent successfully');
    } catch (err) {
        setErrMessage(err.message);
        console.log('error resending code: ', err);
    }
}

if ( confirmSuccess  )
  return <Redirect to='/auth/login' />;

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Please confirm user {params.id}</small>
            </div>
            <Form role="form" onSubmit={e => onSubmit(e)}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder={params.id}
                    type="email"
                    name='email'
                    autoComplete="new-email"
                    onChange={e => onChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="code"
                    type="password"
                    name='code'
                    autoComplete="new-password"
                    onChange={e => onChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              {errMessage!='' && <div className="text-center"><Alert color="danger">{errMessage}</Alert></div>}
              <div className="text-center">
                <Button onClick={() => confirmSignUp()} className="my-4" color="primary" type="button">
                  Confirm
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={() => resendConfirmationCode()}
            >
              <small>Send New code</small>
            </a>
          </Col>

        </Row>
      </Col>
    </>
  );
};


export default ConfirmUser;
