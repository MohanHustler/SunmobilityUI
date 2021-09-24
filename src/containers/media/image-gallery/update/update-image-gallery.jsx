import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { getImageGalleryById } from '../list/get-image-gallery-action';
import { updateImageGallery } from './update-image-gallery-action';
import ImageGalleryForm from '../image-gallery-form';

const UpdateImageGallery = ({ history, location, match }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [updateImageGalleryDetails, setUpdateImageGalleryDetails] = useState({
    banner: null,
    launch_at_with_year: ''
  });

  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateImageGallery);

  useEffect(() => {
    if (match.params.id) {
      getImageGalleryById({ id: match.params.id }, dispatch);
    }
  }, [match.params.id, dispatch]);

  const { imageGalleryData, isEditImageGalleryLoading } = useSelector(
    (state) => state.getImageGalleryById
  );

  useEffect(() => {
    if (Object.keys(imageGalleryData).length) {
      if (location.state) {
        setCurrentCategory(location.state.display_name);
      }
      setUpdateImageGalleryDetails({
        banner: imageGalleryData.image || '',
        launch_at_with_year: imageGalleryData.launch_at_with_year || ''
      });
      setCurrentCategoryId(imageGalleryData.category_id || '');
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [location.state, imageGalleryData]);

  const imageGallerySuccessCallback = () => {
    history.push('/imagegalleries');
  };

  const handleSubmitImageGallery = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { banner, launch_at_with_year } = updateImageGalleryDetails;

    if (banner && currentCategoryId) {
      let imageGalleryFormData = new FormData();

      if (banner && typeof banner === 'object') {
        imageGalleryFormData.append('image', banner);
      }
      imageGalleryFormData.append('category_id', currentCategoryId);
      imageGalleryFormData.append('launch_at_with_year', launch_at_with_year);
      updateImageGallery(
        {
          formData: imageGalleryFormData,
          id: match.params.id,
          imageGallerySuccessCallback
        },
        dispatch
      );
    }
  };

  const handleCancel = () => {
    history.push('/imagegalleries');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <ImageGalleryForm
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={setCurrentCategoryId}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          imageGalleryDetails={updateImageGalleryDetails}
          setImageGalleryDetails={setUpdateImageGalleryDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitImageGallery={handleSubmitImageGallery}
          noData={noData}
          isLoading={isLoading}
          isEditImageGalleryLoading={isEditImageGalleryLoading}
        />
      </div>
    </div>
  );
};

export default UpdateImageGallery;
