import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';

import { getCoverageById } from '../list/get-coverage-action';
import { updateCoverage } from './update-coverage-action';
import CoverageForm from '../coverage-form';

const UpdateCoverage = ({ history, location, match }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [updateCoverageDetails, setUpdateCoverageDetails] = useState({
    banner: null,
    logo: null,
    heading: '',
    url: ''
  });
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateCoverage);

  useEffect(() => {
    if (match.params.id) {
      getCoverageById({ id: match.params.id }, dispatch);
    }
  }, [match.params.id, dispatch]);

  const { coverageData, isEditCoverageLoading } = useSelector(
    (state) => state.getCoverageById
  );

  useEffect(() => {
    if (Object.keys(coverageData).length) {
      if (location.state) {
        setCurrentCategory(location.state.display_name);
      }

      setUpdateCoverageDetails({
        banner: coverageData.banner_image || null,
        logo: coverageData.logo || null,
        heading: coverageData.heading || '',
        url: coverageData.coverage_link || ''
      });

      setCurrentCategoryId(coverageData.category_id);
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [location.state, coverageData]);

  const coverageSuccessCallback = () => {
    history.push('/coverages');
  };

  const handleSubmitCoverage = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);

    const { heading, url, logo, banner } = updateCoverageDetails;

    if (heading && url && logo && banner) {
      let newsFormData = new FormData();

      newsFormData.append('heading', heading);
      newsFormData.append('coverage_link', url);

      if (banner && typeof banner === 'object') {
        newsFormData.append('banner_image', banner);
      }
      if (logo && typeof logo === 'object') {
        newsFormData.append('logo', logo);
      }
      newsFormData.append('category_id', currentCategoryId);

      updateCoverage(
        {
          formData: newsFormData,
          id: match.params.id,
          coverageSuccessCallback
        },
        dispatch
      );
    }
  };

  const handleCancel = () => {
    history.push('/coverages');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <CoverageForm
          currentCategoryId={currentCategoryId}
          setCurrentCategoryId={setCurrentCategoryId}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
          coverageDetails={updateCoverageDetails}
          setCoverageDetails={setUpdateCoverageDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitCoverage={handleSubmitCoverage}
          noData={noData}
          isLoading={isLoading}
          isEditCoverageLoading={isEditCoverageLoading}
        />
      </div>
    </div>
  );
};

export default UpdateCoverage;
