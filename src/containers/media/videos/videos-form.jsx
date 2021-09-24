import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ButtonLoader from '../../../assets/images/button-loader.svg';

import { getCategory } from '../category/list/category-action';

import close from '../../../assets/images/close.png';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const VideosForm = ({
  setCurrentCategoryId,
  currentCategory,
  setCurrentCategory,
  videoDetails,
  setVideoDetails,
  validated,
  handleCancel,
  handleSubmitVideo,
  noData,
  isLoading,
  isEditVideosLoading
}) => {
  let category = window.location.pathname.toString().split('/');
  category = category[category.length - 1].replaceAll('%20', ' ');

  const dispatch = useDispatch();

  useEffect(() => {
    getCategory({ indicator: 'videos' }, dispatch);
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
      handleSubmitVideo(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditVideosLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>Videos Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input">
                  <label>
                    Videos category<span className="required-char">*</span>
                  </label>
                  <Form.Control readOnly type="text" value={category} />
                </div>
                <div className="custom-input">
                  <label>
                    Videos Banner Image<span>(1Mb - 304 × 174)</span>
                    <span className="required-char">*</span>
                  </label>
                  {typeof videoDetails.banner === 'string' ? (
                    <div className="img-container">
                      <img src={videoDetails.banner} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setVideoDetails({
                            ...videoDetails,
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
                          videoDetails.banner === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setVideoDetails({
                            ...videoDetails,
                            banner: e.target.files[0]
                          })
                        }
                      />
                      {validated && videoDetails.banner === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>
                <div className="custom-input">
                  <label>
                    Videos URL<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Video Url"
                    value={videoDetails.link}
                    onChange={(e) =>
                      setVideoDetails({ ...videoDetails, link: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter video url.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Videos Heading<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Videos Heading"
                    value={videoDetails.heading}
                    onChange={(e) =>
                      setVideoDetails({
                        ...videoDetails,
                        heading: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter videos heading.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Videos By<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Videos By"
                    value={videoDetails.author}
                    onChange={(e) =>
                      setVideoDetails({
                        ...videoDetails,
                        author: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter videos by.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Videos Views<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Videos Views"
                    value={videoDetails.views}
                    onChange={(e) =>
                      setVideoDetails({
                        ...videoDetails,
                        views: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter videos views.
                  </Form.Control.Feedback>
                </div>
                <div className="custom-input">
                  <label>
                    Videos Date<span className="required-char">*</span>
                    <span style={{ color: '#dc3545' }}>
                      (Format should be like Jun 15, 2020)
                    </span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Videos Date"
                    value={videoDetails.date}
                    onChange={(e) =>
                      setVideoDetails({ ...videoDetails, date: e.target.value })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter videos date.
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
                    onClick={handleSubmitVideo}
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

export default VideosForm;
