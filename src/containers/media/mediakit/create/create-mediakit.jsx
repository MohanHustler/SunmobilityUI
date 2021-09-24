import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { addMediakit } from './create-mediakit-action';
import MediakitForm from '../mediakit-form';

const CreateMediakit = ({ history }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');

  const [addMediakitDetails, setAddMediakitDetails] = useState({
    banner: null,
    heading: '',
    description: '',
    downloadFile: null,
    downloadType: '',
    url: '',
    under_section_by: '',
    isDownloadable: 'download'
  });
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addMediakit);

  const mediakitSuccessCallback = () => {
    history.push('/mediakits');
  };

  const handleSubmitMediakit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const {
      banner,
      description,
      heading,
      downloadFile,
      downloadType,
      url,
      under_section_by,
      isDownloadable
    } = addMediakitDetails;

    if (banner && heading) {
      let mediakitFormData = new FormData();
      if (isDownloadable === 'download') {
        if (downloadType === 'PDF' && downloadFile) {
          mediakitFormData.append('banner_image', banner);
          mediakitFormData.append('description', description);
          mediakitFormData.append('heading', heading);
          mediakitFormData.append('media_link', '');
          mediakitFormData.append('under_section_by', under_section_by);
          mediakitFormData.append('downloadable_file', downloadFile);
          mediakitFormData.append('downloadable_type', downloadType);
          mediakitFormData.append('category_id', currentCategoryId);

          addMediakit(
            {
              formData: mediakitFormData,
              mediakitSuccessCallback
            },
            dispatch
          );
        } else {
          mediakitFormData.append('banner_image', banner);
          mediakitFormData.append('description', description);
          mediakitFormData.append('heading', heading);
          mediakitFormData.append('media_link', '');
          mediakitFormData.append('under_section_by', under_section_by);
          mediakitFormData.append('downloadable_type', downloadType);
          mediakitFormData.append('category_id', currentCategoryId);

          addMediakit(
            {
              formData: mediakitFormData,
              mediakitSuccessCallback
            },
            dispatch
          );
        }
      } else if (isDownloadable === 'non-download' && description && url) {
        mediakitFormData.append('banner_image', banner);
        mediakitFormData.append('description', description);
        mediakitFormData.append('heading', heading);
        mediakitFormData.append('media_link', url);
        mediakitFormData.append('under_section_by', '');
        mediakitFormData.append('downloadable_file', '');
        mediakitFormData.append('downloadable_type', '');
        mediakitFormData.append('category_id', currentCategoryId);

        addMediakit(
          {
            formData: mediakitFormData,
            mediakitSuccessCallback
          },
          dispatch
        );
      }
    }
  };

  const handleCancel = () => {
    history.push('/mediakits');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <MediakitForm
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={setCurrentCategoryId}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          mediakitDetails={addMediakitDetails}
          setMediakitDetails={setAddMediakitDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitMediakit={handleSubmitMediakit}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateMediakit;
