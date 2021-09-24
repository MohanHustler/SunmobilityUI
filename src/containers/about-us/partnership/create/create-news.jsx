import React, { Fragment } from 'react';

import { Form } from 'react-bootstrap';

import close from '../../../../assets/images/close.png';

const AddNews = ({
  index,
  handleRemoveNews,
  partnerNewsList,
  setPartnerNewsList,
  updateNews,
  validated
}) => {
  return (
    <div className="add-news">
      {!updateNews && (
        <h2 onClick={() => handleRemoveNews(index)}>
          <img src={close} alt="logo" />
        </h2>
      )}
      <div className="custom-input">
        <label>
          News Banner (347 × 277)<span className="required-char">*</span>
        </label>
        {typeof partnerNewsList[0].bannerImage === 'string' ? (
          <div className="img-container">
            <img src={partnerNewsList[0].bannerImage} alt="bannerImage" />
            <div
              className="img-close-icon"
              onClick={() => {
                let newArr = [...partnerNewsList];
                newArr[index].bannerImage = null;
                setPartnerNewsList(newArr);
              }}
            >
              <img src={close} alt="logo" />
            </div>
          </div>
        ) : (
          <Fragment>
            <Form.File
              className={`${
                validated &&
                partnerNewsList[0].bannerImage === null &&
                'required-file'
              }`}
              id="exampleFormControlFile1"
              onChange={(e) => {
                let newArr = [...partnerNewsList];
                newArr[index].bannerImage = e.target.files[0];
                setPartnerNewsList(newArr);
              }}
            />
            {validated && partnerNewsList[0].bannerImage === null && (
              <span className="required-file-feedback">
                Please upload banner image.
              </span>
            )}
          </Fragment>
        )}
      </div>
      <div className="custom-input">
        <label>
          News Heading<span className="required-char">*</span>
        </label>
        <Form.Control
          required
          as="textarea"
          rows="5"
          placeholder="Enter Heading"
          value={partnerNewsList[index].heading}
          onChange={(e) => {
            let newArr = [...partnerNewsList];
            newArr[index].heading = e.target.value;
            setPartnerNewsList(newArr);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter heading.
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
          value={partnerNewsList[index].newsUrl}
          onChange={(e) => {
            let newArr = [...partnerNewsList];
            newArr[index].newsUrl = e.target.value;
            setPartnerNewsList(newArr);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter news url.
        </Form.Control.Feedback>
      </div>
      <div className="custom-input">
        <label>
          News Brand Link<span className="required-char">*</span>
        </label>
        <Form.Control
          required
          type="text"
          placeholder="Enter News Brand Link"
          value={partnerNewsList[index].newsBrandLink}
          onChange={(e) => {
            let newArr = [...partnerNewsList];
            newArr[index].newsBrandLink = e.target.value;
            setPartnerNewsList(newArr);
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter news brand link.
        </Form.Control.Feedback>
      </div>
    </div>
  );
};

export default AddNews;
