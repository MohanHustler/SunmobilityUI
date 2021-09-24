import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { addCoverage } from './create-coverage-action';
import CoverageForm from '../coverage-form';

const CreateCoverage = ({ history }) => {
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [addCoverageDetails, setAddCoverageDetails] = useState({
    banner: null,
    logo: null,
    heading: '',
    url: ''
  });
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addCoverage);

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
    const { heading, url, logo, banner } = addCoverageDetails;

    if (heading && url && logo && banner) {
      let newsFormData = new FormData();

      newsFormData.append('heading', heading);
      newsFormData.append('coverage_link', url);
      newsFormData.append('banner_image', banner);
      newsFormData.append('logo', logo);
      newsFormData.append('category_id', currentCategoryId);

      addCoverage(
        {
          formData: newsFormData,
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
          coverageDetails={addCoverageDetails}
          setCoverageDetails={setAddCoverageDetails}
          validated={validated}
          handleCancel={handleCancel}
          handleSubmitCoverage={handleSubmitCoverage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateCoverage;
