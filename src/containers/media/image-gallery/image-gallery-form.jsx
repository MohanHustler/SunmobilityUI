import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import CreatableSelect from 'react-select/creatable';

import { getCategory } from '../category/list/category-action';
import { getLaunches } from './list/get-launches-action';

import close from '../../../assets/images/close.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const ImageGalleryForm = ({
  currentCategory,
  setCurrentCategory,
  setCurrentCategoryId,
  imageGalleryDetails,
  setImageGalleryDetails,
  validated,
  handleCancel,
  handleSubmitImageGallery,
  noData,
  isLoading,
  isEditImageGalleryLoading
}) => {
  let category = window.location.pathname.toString().split('/');
  category = category[category.length - 1].replaceAll('%20', ' ');

  const dispatch = useDispatch();

  useEffect(() => {
    getCategory({ indicator: 'image_galleries' }, dispatch);
  }, [dispatch]);

  // eslint-disable-next-line no-unused-vars
  const { categoryList } = useSelector((state) => state.getCategory);
  const { launchData } = useSelector((state) => state.getLaunches);

  let catId = categoryList.filter((el) => el.display_name === category);
  catId = catId.length && catId[0].id;

  useEffect(() => {
    if (currentCategory === '') {
      setCurrentCategory(category);
      setCurrentCategoryId(catId);
    }
    getLaunches({ id: catId }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  let launchesWithYear = [];
  if (launchData) {
    launchesWithYear = launchData.map((launch) => {
      return {
        label: launch.launch_at_with_year,
        value: launch.launch_at_with_year
      };
    });

    launchesWithYear = [
      ...new Map(
        launchesWithYear &&
          launchesWithYear.map((item) => [item['value'], item])
      ).values()
    ];
  }

  const handleChange = (newValue) => {
    if (newValue) {
      setImageGalleryDetails({
        ...imageGalleryDetails,
        launch_at_with_year: newValue.value
      });
    } else {
      setImageGalleryDetails({
        ...imageGalleryDetails,
        launch_at_with_year: ''
      });
    }
  };
  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setImageGalleryDetails({
        ...imageGalleryDetails,
        launch_at_with_year: inputValue.value
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitImageGallery(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditImageGalleryLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head">
              <h4>Image Gallery Form</h4>
              <p>Enter your details below</p>
            </div>
            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input">
                  <label>
                    Image Gallery category
                    <span className="required-char">*</span>
                  </label>
                  <Form.Control readOnly type="text" value={category} />
                </div>
                <div className="custom-input">
                  <label>
                    Image Gallery Banner Image<span>(1Mb - 304 × 281)</span>
                    <span className="required-char">*</span>
                  </label>
                  {typeof imageGalleryDetails.banner === 'string' ? (
                    <div className="img-container">
                      <img src={imageGalleryDetails.banner} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setImageGalleryDetails({
                            ...imageGalleryDetails,
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
                          imageGalleryDetails.banner === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setImageGalleryDetails({
                            ...imageGalleryDetails,
                            banner: e.target.files[0]
                          })
                        }
                      />
                      {validated && imageGalleryDetails.banner === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>

                <div className="custom-input">
                  <label>Launch At With Year </label>
                  <span style={{ color: '#dc3545', marginLeft: '5px' }}>
                    (should be like Piaggio Launch, 2019)
                  </span>
                  <label style={{ display: 'block', fontSize: '14px' }}>
                    Note: Please mention image at if any specific occasion
                  </label>
                  <CreatableSelect
                    isClearable
                    defaultValue={
                      imageGalleryDetails.launch_at_with_year && {
                        label: imageGalleryDetails.launch_at_with_year,
                        value: imageGalleryDetails.launch_at_with_year
                      }
                    }
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    options={launchesWithYear}
                  />
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
                    onClick={handleSubmitImageGallery}
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

export default ImageGalleryForm;
