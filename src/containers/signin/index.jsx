import React, { useState, Fragment } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { signin } from './signin-action';
import SigninHeader from '../../components/header/signin-header';
import ButtonLoader from '../../assets/images/button-loader.svg';

const Signin = ({ history }) => {
  const [email, setEmail] = useState('');
  const [inValidEmail, setInValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.signin);

  const isValidEmail = () => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return pattern.test(email);
  };
  const loginCallback = () => {
    history.push('/');
  };
  const triggerSignin = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    if (email) {
      if (!isValidEmail(email)) {
        setInValidEmail(true);
      }
    }
    if (email && password && isValidEmail(email)) {
      signin({ email, password, loginCallback }, dispatch);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      triggerSignin(e);
    }
  };

  return (
    <div className="signin">
      <SigninHeader />
      <div className="signin-container">
        <div className="signin-card">
          <div className="signin-card-head">
            <h4>Login to Admin Panel</h4>
            <p>Enter your details below</p>
          </div>
          <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
            <div className="custom-input">
              <label>Username*</label>
              <Form.Control
                required
                type="email"
                placeholder="Enter your Username"
                className={`${inValidEmail && 'invalid-email'}`}
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              {email === '' && (
                <Form.Control.Feedback type="invalid">
                  Please enter an email.
                </Form.Control.Feedback>
              )}
              {inValidEmail && (
                <span className="required-input-feedback">
                  Please enter a valid email.
                </span>
              )}
            </div>
            <div className="custom-input">
              <label>Password*</label>
              <Form.Control
                type="password"
                placeholder="Enter your Password"
                required
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a password.
              </Form.Control.Feedback>
            </div>
          </Form>
          <Button
            className={`green-btn ${isLoading && 'loading-button'}`}
            onClick={(e) => triggerSignin(e)}
          >
            {!isLoading ? (
              'Login'
            ) : (
              <Fragment>
                <img src={ButtonLoader} alt="button-loader" />
                <span className="laoder-span">Loading....</span>
              </Fragment>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
