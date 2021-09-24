import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

import AddNews from './create/create-news';

import Header from '../../../components/header';
import Sidebar from '../../../components/sidebar';
import PartnerForm from './partner-form';

import plus from '../../../assets/images/plus.png';
import arrow from '../../../assets/images/left-arrow.png';
import ButtonLoader from '../../../assets/images/button-loader.svg';

const PartnershipForm = ({
  partnerList,
  setPartnerList,
  partnerNewsList,
  setPartnerNewsList,
  handleAddNews,
  handleRemoveNews,
  handleCancel,
  handlePartnerNewsSubmit,
  isLoading,
  validated
}) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handlePartnerNewsSubmit(e);
    }
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-container">
          <div className="dashboard-inner-container">
            <div className="back-arrow" onClick={handleCancel}>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="news-form">
              <div className="signin-card-head">
                <h4>Partnership Form</h4>
                <p>Enter your details below</p>
              </div>

              <Form onKeyDown={handleKeyDown} noValidate validated={validated}>
                <Fragment>
                  <PartnerForm
                    partnerList={partnerList}
                    setPartnerList={setPartnerList}
                    validated={validated}
                  />
                </Fragment>

                {partnerNewsList && (
                  <div className="signin-card-head">
                    <h4>
                      Add News Content
                      <span onClick={handleAddNews} className="green-btn">
                        <img src={plus} alt="logo" /> Add News Card
                      </span>
                    </h4>
                  </div>
                )}

                {partnerNewsList &&
                  partnerNewsList.map((el, index) => (
                    <AddNews
                      key={index}
                      index={index}
                      partnerNewsList={partnerNewsList}
                      setPartnerNewsList={setPartnerNewsList}
                      handleRemoveNews={handleRemoveNews}
                      updateNews={false}
                      validated={validated}
                    />
                  ))}
                <div className="form-button-section">
                  <Button className="white-btn" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button
                    className={`green-btn ${isLoading && 'loading-button'}`}
                    onClick={handlePartnerNewsSubmit}
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipForm;
