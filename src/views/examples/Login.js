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
import { Link, Redirect } from 'react-router-dom';

import { Auth } from 'aws-amplify';



const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const [errMessage,setErrMessage] = useState([]);
  const [confirmRequired,setConfirmRequired] = useState('');

  const onChange = e => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
      e.preventDefault();
      signIn();
      //login(email, password);
  };

  async function signIn() {
    console.log('log in called');
    try {
        const user = await Auth.signIn(email, password);
    } catch (error) {
        setErrMessage(error.message);
        if (error.code=='UserNotConfirmedException'){
          setConfirmRequired('/auth/confirmuser/'+email);
        }
        console.log('error signing in', error);
    }
}  

//if ( isAuthenticated == 'LoggedIn'  )
//  return <Redirect to='/admin/' />;

if ( confirmRequired!="" )
  return (<Redirect to={confirmRequired}/>);


  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
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
                    placeholder="Email"
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
                    placeholder="Password"
                    type="password"
                    name='password'
                    autoComplete="new-password"
                    onChange={e => onChange(e)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              {errMessage!='' && <div className="text-center"><Alert color="danger">{errMessage}</Alert><Link to={'/auth/confirmuser/' + email} >Confirm</Link></div>}
              <div className="text-center">
                <Button onClick={() => signIn()} className="my-4" color="primary" type="button">
                  Sign in
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
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
          <Link to='/auth/register'><small>Create new account</small></Link>

          </Col>
        </Row>
      </Col>
    </>
  );
};


export default Login;
