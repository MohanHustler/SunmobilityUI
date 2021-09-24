import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { getCategory } from '../category/list/category-action';

import close from '../../../assets/images/close.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const CoverageForm = ({
  setCurrentCategoryId,
  currentCategory,
  setCurrentCategory,
  coverageDetails,
  setCoverageDetails,
  validated,
  handleCancel,
  handleSubmitCoverage,
  noData,
  isLoading,
  isEditCoverageLoading
}) => {
  let category = window.location.pathname.toString().split('/');
  category = category[category.length - 1].replaceAll('%20', ' ');

  const dispatch = useDispatch();

  useEffect(() => {
    getCategory({ indicator: 'coverages' }, dispatch);
  }, [dispatch]);

  // eslint-disable-next-line no-unused-vars
  const { categoryList } = useSelector((state) => state.getCategory);

  let catId = categoryList.filter((el) => el.display_name === category);
  catId = catId.length && catId[0].id;

  useEffect(() => {
    if (currentCategory === '') {
      setCurrentCategory(category);
      setCurrentCategoryId(catId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitCoverage(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditCoverageLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>Coverage Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input ">
                  <label>
                    Coverage category<span className="required-char">*</span>
                  </label>
                  <Form.Control readOnly type="text" value={category} />
                </div>
                <div className="custom-input">
                  <label>
                    Coverage Banner Image<span>(1Mb - 304 × 174)</span>
                    <span className="required-char">*</span>
                  </label>
                  {typeof coverageDetails.banner === 'string' ? (
                    <div className="img-container">
                      <img src={coverageDetails.banner} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setCoverageDetails({
                            ...coverageDetails,
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
                        className={`${
                          validated &&
                          coverageDetails.banner === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setCoverageDetails({
                            ...coverageDetails,
                            banner: e.target.files[0]
                          })
                        }
                      />
                      {validated && coverageDetails.banner === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>
                <div className="custom-input">
                  <label>
                    Coverage Logo<span>(1Mb - 198 × 30)</span>
                    <span className="required-char">*</span>
                  </label>
                  {typeof coverageDetails.logo === 'string' ? (
                    <div className="img-container">
                      <img src={coverageDetails.logo} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setCoverageDetails({
                            ...coverageDetails,
                            logo: null
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
                          coverageDetails.logo === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setCoverageDetails({
                            ...coverageDetails,
                            logo: e.target.files[0]
                          })
                        }
                      />
                      {validated && coverageDetails.logo === null && (
                        <span className="required-file-feedback">
                          Please upload logo.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>
                <div className="custom-input">
                  <label>
                    Coverage Heading<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Coverage Heading"
                    value={coverageDetails.heading}
                    onChange={(e) =>
                      setCoverageDetails({
                        ...coverageDetails,
                        heading: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter coverage heading.
                  </Form.Control.Feedback>
                </div>

                <div className="custom-input">
                  <label>
                    Coverage URL<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Coverage url"
                    value={coverageDetails.url}
                    onChange={(e) =>
                      setCoverageDetails({
                        ...coverageDetails,
                        url: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter coverage url.
                  </Form.Control.Feedback>
                </div>
              </Form>
            ) : (
              <Form>No data found</Form>
            )}
            {!noData && (
              <Fragment>
                <div className="form-button-section">
                  <Button className="white-btn" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button
                    className={`green-btn ${isLoading && 'loading-button'}`}
                    onClick={handleSubmitCoverage}
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
              </Fragment>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoverageForm;
