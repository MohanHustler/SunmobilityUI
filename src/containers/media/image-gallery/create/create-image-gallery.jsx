import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { addImageGallery } from './create-image-gallery-action';
import ImageGalleryForm from '../image-gallery-form';

const CreateImageGallery = ({ history, location }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [addImageGalleryDetails, setAddImageGalleryDetails] = useState({
    banner: null,
    launch_at_with_year: ''
  });
  const [validated, setValidated] = useState(false);

  const imageGallerySuccessCallback = () => {
    history.push('/imagegalleries');
  };

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addImageGallery);

  const handleSubmitImageGallery = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);

    const { banner, launch_at_with_year } = addImageGalleryDetails;

    if (banner && currentCategoryId) {
      let imageGalleryFormData = new FormData();

      imageGalleryFormData.append('image', banner);
      imageGalleryFormData.append('category_id', currentCategoryId);
      imageGalleryFormData.append('launch_at_with_year', launch_at_with_year);
      addImageGallery(
        {
          formData: imageGalleryFormData,
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
          imageGalleryDetails={addImageGalleryDetails}
          setImageGalleryDetails={setAddImageGalleryDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitImageGallery={handleSubmitImageGallery}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateImageGallery;
