import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { addVideo } from './create-video-action';
import VideosForm from '../videos-form';

const CreateVideo = ({ history }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [addVideoDetails, setAddVideoDetails] = useState({
    banner: null,
    link: '',
    heading: '',
    views: '',
    author: '',
    date: ''
  });
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addVideo);

  const videoSuccessCallback = () => {
    history.push('/videos');
  };

  const handleSubmitVideo = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { banner, link, heading, views, author, date } = addVideoDetails;

    if (banner && link && heading && views && author && date) {
      let videosFormData = new FormData();

      videosFormData.append('banner', banner);
      videosFormData.append('link', link);
      videosFormData.append('heading', heading);
      videosFormData.append('views', views);
      videosFormData.append('author', author);
      videosFormData.append('release_date', date);
      videosFormData.append('category_id', currentCategoryId);

      addVideo(
        {
          formData: videosFormData,
          videoSuccessCallback
        },
        dispatch
      );
    }
  };

  const handleCancel = () => {
    history.push('/videos');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <VideosForm
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={setCurrentCategoryId}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          videoDetails={addVideoDetails}
          setVideoDetails={setAddVideoDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitVideo={handleSubmitVideo}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateVideo;
