import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import NewsForm from '../news-form';
import { getNewsById } from '../list/get_news_action';
import { updateNews } from './update-news-action';

const UpdateNews = ({ history, match }) => {
  const [updateNewsDetails, setUpdateNewsDetails] = useState({
    heading: '',
    description: '',
    newsUrl: '',
    bannerImage: null,
    logoImage: null
  });
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateNews);

  useEffect(() => {
    if (match.params.id) {
      getNewsById({ id: match.params.id }, dispatch);
    }
  }, [match.params, dispatch]);

  const { newsData, isEditNewsLoading } = useSelector(
    (state) => state.getNewsById
  );

  useEffect(() => {
    if (Object.keys(newsData).length) {
      setUpdateNewsDetails({
        heading: newsData.heading || '',
        description: newsData.description || '',
        newsUrl: newsData.news_link || '',
        bannerImage: newsData.banner_image || null,
        logoImage: newsData.partner_logo_image || null
      });
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [newsData]);

  const newsSuccessCallback = () => {
    history.push('/news');
  };
  const handleUpdateNews = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const {
      heading,
      description,
      newsUrl,
      logoImage,
      bannerImage
    } = updateNewsDetails;

    if (heading && description && newsUrl) {
      let newsFormData = new FormData();

      newsFormData.append('heading', heading);
      newsFormData.append('description', description);
      newsFormData.append('news_link', newsUrl);
      if (logoImage && typeof logoImage === 'object') {
        newsFormData.append('partner_logo_image', logoImage);
      }
      if (bannerImage && typeof bannerImage === 'object') {
        newsFormData.append('banner_image', bannerImage);
      }

      updateNews(
        {
          formData: newsFormData,
          id: match.params.id,
          newsSuccessCallback
        },
        dispatch
      );
    }
  };

  const handleCancel = () => {
    history.push('/news');
  };
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <NewsForm
          newsDetails={updateNewsDetails}
          validated={validated}
          setNewsDetails={setUpdateNewsDetails}
          handleCancel={handleCancel}
          handleSubmitNews={handleUpdateNews}
          noData={noData}
          isLoading={isLoading}
          isEditNewsLoading={isEditNewsLoading}
        />
      </div>
    </div>
  );
};

export default UpdateNews;
