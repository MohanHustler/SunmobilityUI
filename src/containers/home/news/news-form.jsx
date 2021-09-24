import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import close from '../../../assets/images/close.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const NewsForm = ({
  newsDetails,
  validated,
  setNewsDetails,
  handleCancel,
  handleSubmitNews,
  noData,
  isLoading,
  isEditNewsLoading
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitNews(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditNewsLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>News Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input">
                  <label>
                    News Heading<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter News Heading"
                    value={newsDetails.heading}
                    onChange={(e) =>
                      setNewsDetails({
                        ...newsDetails,
                        heading: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter news heading.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    News Description<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    as="textarea"
                    rows="5"
                    placeholder="Enter News description"
                    value={newsDetails.description}
                    onChange={(e) =>
                      setNewsDetails({
                        ...newsDetails,
                        description: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter news description.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    News Url<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter news url"
                    value={newsDetails.newsUrl}
                    onChange={(e) => {
                      setNewsDetails({
                        ...newsDetails,
                        newsUrl: e.target.value
                      });
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter news url.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    News Banner Image (744 × 302)
                    <span className="required-char">*</span>
                  </label>
                  {typeof newsDetails.bannerImage === 'string' ? (
                    <div className="img-container">
                      <img src={newsDetails.bannerImage} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setNewsDetails({
                            ...newsDetails,
                            bannerImage: null
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
                          newsDetails.bannerImage === null &&
                          'required-file'
                        }`}
                        onChange={(e) =>
                          setNewsDetails({
                            ...newsDetails,
                            bannerImage: e.target.files[0]
                          })
                        }
                      />
                      {validated && newsDetails.bannerImage === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>
                <div className="custom-input">
                  <label>
                    News Logo Image (432 × 40)
                    <span className="required-char">*</span>
                  </label>
                  {typeof newsDetails.logoImage === 'string' ? (
                    <div className="logo-container">
                      <img src={newsDetails.logoImage} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setNewsDetails({
                            ...newsDetails,
                            logoImage: null
                          })
                        }
                      >
                        <img src={close} alt="logo" />
                      </div>
                    </div>
                  ) : (
                    <Fragment>
                      <Form.File
                        className={`${
                          validated &&
                          newsDetails.bannerImage === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setNewsDetails({
                            ...newsDetails,
                            logoImage: e.target.files[0]
                          })
                        }
                      />
                      {validated && newsDetails.bannerImage === null && (
                        <span className="required-file-feedback">
                          Please upload logo image.
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
                  onClick={handleSubmitNews}
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

export default NewsForm;
