import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { getVideoById } from '../list/get-video-action';
import { updateVideo } from './update-video-action';
import VideosForm from '../videos-form';
import { videoDateFormater } from '../../../../utils/formattor';

const UpdateVideo = ({ history, location, match }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [updateVideoDetails, setUpdateVideoDetails] = useState({
    banner: null,
    link: '',
    heading: '',
    views: '',
    author: '',
    date: ''
  });
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateVideo);

  useEffect(() => {
    if (match.params.id) {
      getVideoById({ id: match.params.id }, dispatch);
    }
  }, [match.params.id, dispatch]);

  const { videoData, isEditVideosLoading } = useSelector(
    (state) => state.getVideoById
  );

  useEffect(() => {
    if (Object.keys(videoData).length) {
      if (location.state) {
        setCurrentCategory(location.state.display_name || '');
      }

      setUpdateVideoDetails({
        banner: videoData.banner || null,
        link: videoData.link || '',
        heading: videoData.heading || '',
        views: videoData.views || '',
        author: videoData.author || '',
        date: videoDateFormater(videoData.release_date) || ''
      });

      setCurrentCategoryId(videoData.category_id || '');
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [location.state, videoData]);

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
    const { banner, link, heading, views, author, date } = updateVideoDetails;

    if (banner && link && heading && views && author && date) {
      let videosFormData = new FormData();

      if (banner && typeof banner === 'object') {
        videosFormData.append('banner', banner);
      }
      videosFormData.append('link', link);
      videosFormData.append('heading', heading);
      videosFormData.append('views', views);
      videosFormData.append('author', author);
      videosFormData.append('release_date', date);
      videosFormData.append('category_id', currentCategoryId);

      updateVideo(
        {
          id: match.params.id,
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
          videoDetails={updateVideoDetails}
          setVideoDetails={setUpdateVideoDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitVideo={handleSubmitVideo}
          noData={noData}
          isLoading={isLoading}
          isEditVideosLoading={isEditVideosLoading}
        />
      </div>
    </div>
  );
};

export default UpdateVideo;
