import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getPartnerNews } from './partner-news-action';
import { deletePartner } from '../delete/delete-partner-action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const PartnershipView = ({ history }) => {
  const [partnerId, setPartnerId] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();

  const getPartnerNewsDetails = (currentPageNo, pageSize) => {
    getPartnerNews({ pageNumber: currentPageNo, pageSize: pageSize }, dispatch);
  };

  useEffect(() => {
    getPartnerNewsDetails(currentPageNo, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { partnerNewsList, isLoading, totalRecords } = useSelector(
    (state) => state.getPartnerNews
  );

  let newsList = partnerNewsList.map(({ PartnerNews }) => PartnerNews);

  newsList = newsList.map((news) => news.sort((a, b) => b.id - a.id));

  const handleAddPartner = () => {
    history.push('/partnership/create');
  };

  const handleEditPartner = (partner) => {
    history.push(`/partnership/${partner.id}/edit`);
  };

  const deletePartnerSuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    getPartnerNewsDetails(currentPageNo, pageSize);
  };

  const handleDeletePartner = () => {
    deletePartner({ id: partnerId, deletePartnerSuccess }, dispatch);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-container">
          {!isLoading ? (
            <div className="dashboard-inner-container">
              <div className="news-view">
                <div className="signin-card-head">
                  <h4>
                    Partnership View
                    <span className="green-btn" onClick={handleAddPartner}>
                      <img src={plus} alt="logo" /> Add Partnership
                    </span>
                  </h4>
                </div>
                {partnerNewsList &&
                  partnerNewsList.map((partnerNews, index) => (
                    <div
                      className="news-card partnership-card"
                      key={partnerNews.id}
                    >
                      <div className="news-card-text">
                        <div className="bottom-section">
                          <span>
                            <img
                              src={
                                partnerNews.partner_logo &&
                                partnerNews.partner_logo
                              }
                              alt="logo"
                            />
                          </span>
                          <div className="button-section">
                            <ul className="list-unstyled">
                              <li
                                onClick={() => handleEditPartner(partnerNews)}
                              >
                                Edit
                              </li>
                              <li></li>
                              <li
                                onClick={() => {
                                  setPartnerId(partnerNews.id);
                                  setShowDeletePopup(!showDeletePopup);
                                }}
                              >
                                Delete
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4>
                          {partnerNews.description && partnerNews.description}
                        </h4>
                      </div>

                      <Row className="news-card-section">
                        {newsList &&
                          newsList[index].map((news) => (
                            <Col md="4" key={news.id}>
                              <div className="news-card-img">
                                <img
                                  src={news.banner_image && news.banner_image}
                                  alt="logo"
                                />
                                <div className="overlay"></div>
                                <div className="milestone-text">
                                  <p>{news.heading && news.heading}</p>
                                  <label>
                                    {news.news_brand_link &&
                                      news.news_brand_link}
                                  </label>
                                </div>
                              </div>
                            </Col>
                          ))}
                      </Row>
                    </div>
                  ))}
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getPartnerNewsDetails}
              />
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <DeletePopup
        showDeletePopup={showDeletePopup}
        setShowDeletePopup={setShowDeletePopup}
        handleDelete={handleDeletePartner}
      />
    </div>
  );
};

export default PartnershipView;
