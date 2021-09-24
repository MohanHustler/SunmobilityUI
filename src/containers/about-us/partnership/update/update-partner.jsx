import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import { getPartnerById } from '../list/get-partner-action';
import { updatePartner } from './update-partner-action';
import { addPartnerNews } from '../create/create-partner-news-action';
import { updatePartnerNews } from './update-partner-news-action';
import { deletePartnerNews } from '../delete/delete-partner-news-action';
import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import DeletePopup from '../../../../components/delete-popup';
import PartnerForm from '../partner-form';
import NewsTable from '../news-table';
import AddNews from '../create/create-news';
import Loader from '../../../../components/loader';
import ButtonLoader from '../../../../assets/images/button-loader.svg';
import arrow from '../../../../assets/images/left-arrow.png';

const UpdatePartner = ({ match, history }) => {
  const [partnerList, setPartnerList] = useState({
    logo: null,
    description: ''
  });
  const [createNews, setCreateNews] = useState(false);
  const [updateNews, setUpdateNews] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [partnerNewsId, setPartnerNewsId] = useState('');
  const [noData, setnoData] = useState(false);
  const [partnerNewsList, setPartnerNewsList] = useState([
    {
      bannerImage: null,
      heading: '',
      newsUrl: '',
      newsBrandLink: ''
    }
  ]);
  const [createPartnerNewsList, setCreatePartnerNewsList] = useState([
    {
      bannerImage: null,
      heading: '',
      newsUrl: '',
      newsBrandLink: ''
    }
  ]);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isPartnerLoading } = useSelector((state) => state.updatePartner);
  const { isAddNewsLoading } = useSelector((state) => state.addPartnerNews);
  const { isUpdateNewsLoading } = useSelector(
    (state) => state.updatePartnerNews
  );

  useEffect(() => {
    if (match.params.id) {
      getPartnerById({ id: match.params.id }, dispatch);
    }
  }, [match.params.id, dispatch]);

  const { partnerData, isLoading } = useSelector(
    (state) => state.getPartnerById
  );

  useEffect(() => {
    if (Object.keys(partnerData).length) {
      setPartnerList({
        logo: partnerData.partner_logo || null,
        description: partnerData.description || ''
      });
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [partnerData]);

  const handleUpdatePartner = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { description, logo } = partnerList;

    if (description && logo) {
      let partnerFormData = new FormData();

      partnerFormData.append('description', description);

      if (logo && typeof logo === 'object') {
        partnerFormData.append('partner_logo', logo);
      }

      updatePartner(
        { formData: partnerFormData, id: match.params.id },
        dispatch
      );
    }
  };

  const partnerNewsSuccessCallback = () => {
    getPartnerById({ id: match.params.id }, dispatch);
    setUpdateNews(!updateNews);
  };

  const handleUpdatePartnerNews = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { heading, newsUrl, newsBrandLink, bannerImage } = partnerNewsList[0];

    if (heading && newsUrl && newsBrandLink && bannerImage) {
      let partnerNewsFormData = new FormData();

      partnerNewsFormData.append('heading', heading);
      partnerNewsFormData.append('news_link', newsUrl);
      partnerNewsFormData.append('news_brand_link', newsBrandLink);

      if (bannerImage && typeof bannerImage === 'object') {
        partnerNewsFormData.append('banner_image', bannerImage);
      }

      updatePartnerNews(
        {
          formData: partnerNewsFormData,
          id: partnerNewsId,
          partnerNewsSuccessCallback
        },
        dispatch
      );
    }
  };

  const deletePartnerNewsSuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    getPartnerById({ id: match.params.id }, dispatch);
  };

  const handleDeletePartnerNews = () => {
    deletePartnerNews(
      { id: partnerNewsId, deletePartnerNewsSuccess },
      dispatch
    );
  };

  const createPartnerNewsCallback = () => {
    setCreateNews(!createNews);
    getPartnerById({ id: match.params.id }, dispatch);
  };

  const handleCreatePartnerNews = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const {
      heading,
      newsUrl,
      newsBrandLink,
      bannerImage
    } = createPartnerNewsList[0];

    if (heading && newsUrl && newsBrandLink && bannerImage) {
      let partnerFormData = new FormData();

      partnerFormData.append('heading', heading);
      partnerFormData.append('news_link', newsUrl);
      partnerFormData.append('news_brand_link', newsBrandLink);
      partnerFormData.append('banner_image', bannerImage);
      partnerFormData.append('partner_id', match.params.id);

      addPartnerNews(
        {
          formData: partnerFormData,
          createPartnerNewsCallback
        },
        dispatch
      );
    }
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-container">
          {!isLoading ? (
            <div className="dashboard-inner-container">
              <div
                className="back-arrow"
                onClick={() => history.push('/partnership')}
              >
                <img src={arrow} alt="arrow" />
              </div>
              <div className="news-form">
                <div className="signin-card-head">
                  <h4>Partnership Form</h4>
                  <p>Enter your details below</p>
                </div>
                {!noData ? (
                  <Form noValidate validated={validated}>
                    <Fragment>
                      <PartnerForm
                        partnerList={partnerList}
                        setPartnerList={setPartnerList}
                        validated={validated}
                      />

                      <div className="partner-submit">
                        <Button
                          className={`green-btn ${
                            isPartnerLoading && 'loading-button'
                          }`}
                          onClick={handleUpdatePartner}
                        >
                          {!isPartnerLoading ? (
                            'Update Partner'
                          ) : (
                            <Fragment>
                              <img src={ButtonLoader} alt="button-loader" />
                              <span className="laoder-span">Loading....</span>
                            </Fragment>
                          )}
                        </Button>
                      </div>
                    </Fragment>
                    {partnerData.partner_news &&
                    partnerData.partner_news.length ? (
                      <NewsTable
                        currentPartner={partnerData.partner_news}
                        setPartnerNewsList={setPartnerNewsList}
                        setUpdateNews={setUpdateNews}
                        setPartnerNewsId={setPartnerNewsId}
                        setShowDeletePopup={setShowDeletePopup}
                        setCreateNews={setCreateNews}
                        validated={validated}
                      />
                    ) : (
                      ''
                    )}

                    {updateNews && (
                      <div className="signin-card-head">
                        <h4>Update News Content</h4>
                      </div>
                    )}

                    {createNews && (
                      <div className="signin-card-head">
                        <h4>Add News Content</h4>
                      </div>
                    )}

                    {updateNews &&
                      partnerNewsList &&
                      partnerNewsList.map((el, index) => (
                        <AddNews
                          key={index}
                          index={index}
                          partnerNewsList={partnerNewsList}
                          setPartnerNewsList={setPartnerNewsList}
                          updateNews={updateNews}
                          validated={validated}
                        />
                      ))}

                    {createNews &&
                      createPartnerNewsList &&
                      createPartnerNewsList.map((el, index) => (
                        <AddNews
                          key={index}
                          index={index}
                          partnerNewsList={createPartnerNewsList}
                          setPartnerNewsList={setCreatePartnerNewsList}
                          updateNews={true}
                          validated={validated}
                        />
                      ))}
                  </Form>
                ) : (
                  <Form>No data found</Form>
                )}

                {createNews && !noData && (
                  <div className="form-button-section">
                    <Button
                      className="white-btn"
                      onClick={() => setCreateNews(!createNews)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={`green-btn ${
                        isAddNewsLoading && 'loading-button'
                      }`}
                      onClick={handleCreatePartnerNews}
                    >
                      {!isAddNewsLoading ? (
                        'Create News'
                      ) : (
                        <Fragment>
                          <img src={ButtonLoader} alt="button-loader" />
                          <span className="laoder-span">Loading....</span>
                        </Fragment>
                      )}
                    </Button>
                  </div>
                )}

                {updateNews && !noData && (
                  <div className="form-button-section">
                    <Button
                      className="white-btn"
                      onClick={() => setUpdateNews(!updateNews)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className={`green-btn ${
                        isUpdateNewsLoading && 'loading-button'
                      }`}
                      onClick={handleUpdatePartnerNews}
                    >
                      {!isUpdateNewsLoading ? (
                        'Update News'
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
      </div>
      <DeletePopup
        showDeletePopup={showDeletePopup}
        setShowDeletePopup={setShowDeletePopup}
        handleDelete={handleDeletePartnerNews}
      />
    </div>
  );
};

export default UpdatePartner;
