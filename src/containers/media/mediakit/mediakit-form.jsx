import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import CreatableSelect from 'react-select/creatable';

import { getCategory } from '../category/list/category-action';
import { getSectionHeading } from './list/get-section-heading-action';

import close from '../../../assets/images/close.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';
import arrow from '../../../assets/images/left-arrow.png';
import Loader from '../../../components/loader';

const MediakitForm = ({
  setCurrentCategoryId,
  currentCategory,
  setCurrentCategory,
  mediakitDetails,
  setMediakitDetails,
  validated,
  handleCancel,
  handleSubmitMediakit,
  noData,
  isLoading,
  isEditMediakitLoading
}) => {
  const underSectionBy = [];
  let category = window.location.pathname.toString().split('/');
  category = category[category.length - 1].replaceAll('%20', ' ');

  const dispatch = useDispatch();

  useEffect(() => {
    getCategory({ indicator: 'media_kits' }, dispatch);
    getSectionHeading(dispatch);
  }, [dispatch]);

  // eslint-disable-next-line no-unused-vars
  const { categoryList } = useSelector((state) => state.getCategory);
  const { sectionHeadingList } = useSelector(
    (state) => state.getSectionHeading
  );

  let catId = categoryList.filter((el) => el.display_name === category);
  catId = catId.length && catId[0].id;

  useEffect(() => {
    if (currentCategory === '') {
      setCurrentCategory(category);
      setCurrentCategoryId(catId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  sectionHeadingList.forEach((heading) => {
    underSectionBy.push({ label: heading, value: heading });
  });

  const handleChange = (newValue) => {
    if (newValue) {
      setMediakitDetails({
        ...mediakitDetails,
        under_section_by: newValue.value
      });
    } else {
      setMediakitDetails({
        ...mediakitDetails,
        under_section_by: ''
      });
    }
  };
  const handleInputChange = (inputValue) => {
    if (inputValue) {
      setMediakitDetails({
        ...mediakitDetails,
        under_section_by: inputValue.value
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSubmitMediakit(e);
    }
  };

  return (
    <div className="dashboard-container">
      {!isEditMediakitLoading ? (
        <div className="dashboard-inner-container">
          <div className="back-arrow" onClick={handleCancel}>
            <img src={arrow} alt="arrow" />
          </div>
          <div className="news-form">
            <div className="signin-card-head mediakit-card">
              <h4>Mediakit Form</h4>
              <p>Enter your details below</p>
            </div>

            {!noData ? (
              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <div className="custom-input downloadable-type">
                  <Form.Check
                    inline
                    checked={mediakitDetails.isDownloadable === 'download'}
                    name="download"
                    label="Downloadable"
                    type="radio"
                    id="inline-radio-1"
                    onChange={(e) =>
                      setMediakitDetails({
                        ...mediakitDetails,
                        isDownloadable: e.target.value === 'on' && 'download'
                      })
                    }
                  />
                  <Form.Check
                    inline
                    checked={mediakitDetails.isDownloadable === 'non-download'}
                    name="download"
                    label="Non Downloadable"
                    type="radio"
                    id="inline-radio-2"
                    onChange={(e) =>
                      setMediakitDetails({
                        ...mediakitDetails,
                        isDownloadable:
                          e.target.value === 'on' && 'non-download'
                      })
                    }
                  />
                </div>

                <div className="custom-input">
                  <label>
                    Mediakit category
                    <span className="required-char">*</span>
                  </label>
                  <Form.Control readOnly type="text" value={category} />
                </div>
                <div className="custom-input">
                  <label>
                    Mediakit Banner Image (304 × 281)
                    <span className="required-char">*</span>
                  </label>
                  {typeof mediakitDetails.banner === 'string' ? (
                    <div className="img-container">
                      <img src={mediakitDetails.banner} alt="banner" />
                      <div
                        className="img-close-icon"
                        onClick={() =>
                          setMediakitDetails({
                            ...mediakitDetails,
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
                          mediakitDetails.banner === null &&
                          'required-file'
                        }`}
                        id="exampleFormControlFile1"
                        onChange={(e) =>
                          setMediakitDetails({
                            ...mediakitDetails,
                            banner: e.target.files[0]
                          })
                        }
                      />
                      {validated && mediakitDetails.banner === null && (
                        <span className="required-file-feedback">
                          Please upload banner image.
                        </span>
                      )}
                    </Fragment>
                  )}
                </div>
                <div className="custom-input">
                  <label>
                    Mediakit Heading<span className="required-char">*</span>
                  </label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Mediakit Heading"
                    value={mediakitDetails.heading}
                    onChange={(e) =>
                      setMediakitDetails({
                        ...mediakitDetails,
                        heading: e.target.value
                      })
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter mediakit heading.
                  </Form.Control.Feedback>
                </div>

                {mediakitDetails.isDownloadable === 'download' && (
                  <>
                    <div className="custom-input">
                      <label>Under Section By</label>
                      <CreatableSelect
                        isClearable
                        defaultValue={
                          mediakitDetails.under_section_by && {
                            label: mediakitDetails.under_section_by,
                            value: mediakitDetails.under_section_by
                          }
                        }
                        onChange={handleChange}
                        onInputChange={handleInputChange}
                        options={underSectionBy}
                      />
                    </div>

                    <div className="custom-input">
                      <label>
                        Mediakit Type<span className="required-char">*</span>
                      </label>
                      <Form.Control
                        required
                        as="select"
                        value={mediakitDetails.downloadType}
                        onChange={(e) =>
                          setMediakitDetails({
                            ...mediakitDetails,
                            downloadType: e.target.value
                          })
                        }
                      >
                        <option value="">Select</option>
                        <option value="PNG">PNG</option>
                        <option value="JPG">JPG</option>
                        <option value="PDF">PDF</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please select mediakit type.
                      </Form.Control.Feedback>
                    </div>
                    {mediakitDetails.downloadType === 'PDF' && (
                      <div className="custom-input">
                        <label>
                          Upload PDF (304 × 281)
                          <span className="required-char">*</span>
                        </label>
                        {typeof mediakitDetails.downloadFile === 'string' ? (
                          <div className="pdf-container">
                            <Form.Control
                              type="text"
                              placeholder=""
                              value={mediakitDetails.downloadFile}
                              readOnly
                            />

                            <div
                              className="pdf-close-icon"
                              onClick={() =>
                                setMediakitDetails({
                                  ...mediakitDetails,
                                  downloadFile: null
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
                                mediakitDetails.downloadFile === null &&
                                'required-file'
                              }`}
                              id="exampleFormControlFile1"
                              onChange={(e) =>
                                setMediakitDetails({
                                  ...mediakitDetails,
                                  downloadFile: e.target.files[0]
                                })
                              }
                            />
                            {validated &&
                              mediakitDetails.downloadFile === null && (
                                <span className="required-file-feedback">
                                  Please upload file.
                                </span>
                              )}
                          </Fragment>
                        )}
                      </div>
                    )}
                  </>
                )}
                {mediakitDetails.isDownloadable === 'non-download' && (
                  <>
                    <div className="custom-input">
                      <label>
                        Mediakit Description
                        <span className="required-char">*</span>
                      </label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Mediakit Description"
                        value={mediakitDetails.description}
                        onChange={(e) =>
                          setMediakitDetails({
                            ...mediakitDetails,
                            description: e.target.value
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter mediakit description.
                      </Form.Control.Feedback>
                    </div>
                    <div className="custom-input">
                      <label>
                        Publication Url<span className="required-char">*</span>
                      </label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Mediakit Url"
                        value={mediakitDetails.url}
                        onChange={(e) =>
                          setMediakitDetails({
                            ...mediakitDetails,
                            url: e.target.value
                          })
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter mediakit url.
                      </Form.Control.Feedback>
                    </div>
                  </>
                )}
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
                    onClick={handleSubmitMediakit}
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

export default MediakitForm;
