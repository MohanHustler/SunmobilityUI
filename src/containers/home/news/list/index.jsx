import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getNews } from './news-action';
import { deleteNews } from '../delete/delete-news-action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListNews = ({ history }) => {
  const [newsId, setNewsId] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();

  const getNewsDetails = (currentPageNo, pageSize) => {
    getNews({ pageNumber: currentPageNo, pageSize: pageSize }, dispatch);
  };

  useEffect(() => {
    getNewsDetails(currentPageNo, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { newsList, isLoading, totalRecords } = useSelector(
    (state) => state.getNews
  );

  const handleAddNews = () => {
    history.push('/news/create');
  };

  const handleEditNews = (news) => {
    history.push(`/news/${news.id}/edit`);
  };

  const deleteNewsSuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    getNewsDetails(currentPageNo, pageSize);
  };

  const handleDeleteNews = () => {
    deleteNews({ id: newsId, deleteNewsSuccess }, dispatch);
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
                    News View
                    <span className="green-btn" onClick={handleAddNews}>
                      <img src={plus} alt="logo" /> Add News
                    </span>
                  </h4>
                </div>
                {newsList &&
                  newsList.map((news) => (
                    <div className="news-card" key={news.id}>
                      <Row>
                        <Col>
                          <div
                            className="news-card-img"
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                              window.open(news.news_link, '_blank')
                            }
                          >
                            <img
                              src={news.banner_image && news.banner_image}
                              alt="logo"
                            />
                          </div>
                        </Col>

                        <Col>
                          <div className="news-card-text">
                            <h4>{news.heading && news.heading}</h4>
                            <p>{news.description && news.description}</p>
                            <div className="bottom-section">
                              <span>
                                <img
                                  src={
                                    news.partner_logo_image &&
                                    news.partner_logo_image
                                  }
                                  alt="logo"
                                />
                              </span>
                              <div className="button-section">
                                <ul className="list-unstyled">
                                  <li onClick={() => handleEditNews(news)}>
                                    Edit
                                  </li>
                                  <li></li>
                                  <li
                                    onClick={() => {
                                      setNewsId(news.id);
                                      setShowDeletePopup(!showDeletePopup);
                                    }}
                                  >
                                    Delete
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}

                <DeletePopup
                  showDeletePopup={showDeletePopup}
                  setShowDeletePopup={setShowDeletePopup}
                  handleDelete={handleDeleteNews}
                />
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getNewsDetails}
              />
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListNews;
