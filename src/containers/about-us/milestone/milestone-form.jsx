import React, { Fragment } from 'react';

import { Form, Button } from 'react-bootstrap';
import close from '../../../assets/images/close.png';
import arrow from '../../../assets/images/left-arrow.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';
import Loader from '../../../components/loader';

const MilestoneForm = ({
  milestoneDetails,
  validated,
  setMilestoneDetails,
  handleCancel,
  handleSubmitMilestone,
  noData,
  isLoading,
  isEditMilestoneLoading
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitMilestone(e);
    }
  };
  return (
    <div className="dashboard-container">
      {!isEditMilestoneLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>Milestone Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input">
                  <label>
                    Milestone Year<span className="required-char">*</span>
                    <span style={{ color: '#dc3545' }}>
                      (Format should be like Jun 2019)
                    </span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Milestone Year"
                    value={milestoneDetails.year}
                    onChange={(e) =>
                      setMilestoneDetails({
                        ...milestoneDetails,
                        year: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter milestone year.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Milestone Description 1
                    <span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="5"
                    placeholder="Enter Description"
                    value={milestoneDetails.descOne}
                    onChange={(e) =>
                      setMilestoneDetails({
                        ...milestoneDetails,
                        descOne: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter milestone description.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Milestone Description 2<span>(Goes to inside banner)</span>
                  </label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    placeholder="Enter Description"
                    value={milestoneDetails.descTwo}
                    onChange={(e) =>
                      setMilestoneDetails({
                        ...milestoneDetails,
                        descTwo: e.target.value
                      })
                    }
                  />
                </div>
                <div className="custom-input">
                  <label>
                    Milestone Banner (780 × 480)
                    <span className="required-char">*</span>
                  </label>
                  {typeof milestoneDetails.banner === 'string' ? (
                    <div className="img-container">
                      <img src={milestoneDetails.banner} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setMilestoneDetails({
                            ...milestoneDetails,
                            banner: null
                          })
                        }
                      >
                        <img src={close} alt="logo" />
                      </div>
                    </div>
                  ) : (
                    <Fragment>
                      <Form.File
                        id="exampleFormControlFile1"
                        className={`${
                          validated &&
                          milestoneDetails.banner === null &&
                          'required-file'
                        }`}
                        onChange={(e) =>
                          setMilestoneDetails({
                            ...milestoneDetails,
                            banner: e.target.files[0]
                          })
                        }
                      />
                      {validated && milestoneDetails.banner === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
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
                  onClick={handleSubmitMilestone}
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

export default MilestoneForm;
