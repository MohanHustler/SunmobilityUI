import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import NewsForm from '../news-form';
import { addNews } from './create-news-action';

const CreateNews = ({ history }) => {
  const [addNewsDetails, setAddNewsDetails] = useState({
    heading: '',
    description: '',
    newsUrl: '',
    bannerImage: null,
    logoImage: null
  });
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addNews);

  const newsSuccessCallback = () => {
    history.push('/news');
  };

  const handleCreateNews = (e) => {
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
    } = addNewsDetails;

    if (heading && description && newsUrl && logoImage && bannerImage) {
      let newsFormData = new FormData();

      newsFormData.append('heading', heading);
      newsFormData.append('description', description);
      newsFormData.append('news_link', newsUrl);
      newsFormData.append('partner_logo_image', logoImage);
      newsFormData.append('banner_image', bannerImage);

      addNews(
        {
          formData: newsFormData,
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
          newsDetails={addNewsDetails}
          validated={validated}
          setNewsDetails={setAddNewsDetails}
          handleCancel={handleCancel}
          handleSubmitNews={handleCreateNews}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateNews;
