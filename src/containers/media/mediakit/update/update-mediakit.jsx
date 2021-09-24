import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { getMediakitById } from '../list/get-mediakit-action';
import { updateMediakit } from './update-mediakit-action';
import MediakitForm from '../mediakit-form';

const UpdateMediakit = ({ history, location, match }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [updateMediakitDetails, setUpdateMediakitDetails] = useState({
    banner: null,
    heading: '',
    description: '',
    downloadFile: null,
    downloadType: '',
    url: '',
    under_section_by: '',
    isDownloadable: ''
  });
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateMediakit);

  useEffect(() => {
    if (match.params.id) {
      getMediakitById({ id: match.params.id }, dispatch);
    }
  }, [match.params.id, dispatch]);

  const { mediakitData, isEditMediakitLoading } = useSelector(
    (state) => state.getMediakitById
  );

  useEffect(() => {
    if (Object.keys(mediakitData).length) {
      if (location.state) {
        setCurrentCategory(location.state.display_name);
      }

      setUpdateMediakitDetails({
        banner: mediakitData.banner_image || null,
        heading: mediakitData.heading || '',
        description: mediakitData.description || '',
        downloadFile: mediakitData.downloadable_file || null,
        downloadType: mediakitData.downloadable_type || '',

        url: mediakitData.media_link || '',
        under_section_by: mediakitData.under_section_by || '',
        isDownloadable:
          mediakitData.downloadable_type !== '' ? 'download' : 'non-download'
      });
      setCurrentCategoryId(mediakitData.category_id || '');
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [location.state, mediakitData]);

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
    } = updateMediakitDetails;

    if (banner && heading) {
      let mediakitFormData = new FormData();

      if (isDownloadable === 'download') {
        if (downloadType === 'PDF' && downloadFile) {
          mediakitFormData.append('description', description);
          mediakitFormData.append('heading', heading);
          mediakitFormData.append('media_link', '');
          mediakitFormData.append('under_section_by', under_section_by);
          mediakitFormData.append('downloadable_type', downloadType);
          mediakitFormData.append('category_id', currentCategoryId);

          if (banner && typeof banner === 'object') {
            mediakitFormData.append('banner_image', banner);
          }

          if (downloadFile && typeof downloadFile === 'object') {
            mediakitFormData.append('downloadable_file', downloadFile);
          }

          updateMediakit(
            {
              formData: mediakitFormData,
              id: match.params.id,
              mediakitSuccessCallback
            },
            dispatch
          );
        }
        if (downloadType !== 'PDF' && downloadFile === null) {
          mediakitFormData.append('description', description);
          mediakitFormData.append('heading', heading);
          mediakitFormData.append('media_link', '');
          mediakitFormData.append('under_section_by', under_section_by);
          mediakitFormData.append('downloadable_type', downloadType);
          mediakitFormData.append('downloadable_file', '');
          mediakitFormData.append('category_id', currentCategoryId);

          if (banner && typeof banner === 'object') {
            mediakitFormData.append('banner_image', banner);
          }

          updateMediakit(
            {
              formData: mediakitFormData,
              id: match.params.id,
              mediakitSuccessCallback
            },
            dispatch
          );
        }
      } else if (isDownloadable === 'non-download' && description && url) {
        mediakitFormData.append('description', description);
        mediakitFormData.append('heading', heading);
        mediakitFormData.append('media_link', url);
        mediakitFormData.append('under_section_by', '');
        mediakitFormData.append('downloadable_file', '');
        mediakitFormData.append('downloadable_type', '');
        mediakitFormData.append('category_id', currentCategoryId);

        if (banner && typeof banner === 'object') {
          mediakitFormData.append('banner_image', banner);
        }

        updateMediakit(
          {
            formData: mediakitFormData,
            id: match.params.id,
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
          mediakitDetails={updateMediakitDetails}
          setMediakitDetails={setUpdateMediakitDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitMediakit={handleSubmitMediakit}
          noData={noData}
          isLoading={isLoading}
          isEditMediakitLoading={isEditMediakitLoading}
        />
      </div>
    </div>
  );
};

export default UpdateMediakit;
