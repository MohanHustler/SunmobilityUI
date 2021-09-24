import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

import ButtonLoader from '../../../assets/images/button-loader.svg';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const NetworkForm = ({
  title,
  validated,
  setTitle,
  handleCancel,
  handleSubmitNetwork,
  noData,
  isLoading,
  isEditNetworkLoading
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitNetwork(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditNetworkLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>Network Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input">
                  <label>
                    Network Description<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="5"
                    placeholder="Enter Network description"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter network description
                  </Form.Control.Feedback>
                </div>
              </Form>
            ) : (
              <Form>No data found</Form>
            )}
            {!noData && (
              <div className="form-button-section">
                <Button className="white-btn" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button
                  className={`green-btn ${isLoading && 'loading-button'}`}
                  onClick={handleSubmitNetwork}
                >
                  {!isLoading ? (
                    'Submit'
                  ) : (
                    <Fragment>
                      <img src={ButtonLoader} alt="button-loader" />
                      <span className="laoder-span">Loading....</span>
                    </Fragment>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NetworkForm;
