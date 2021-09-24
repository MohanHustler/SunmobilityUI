import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import MilestoneForm from '../milestone-form';
import { addMilestone } from './create-milestone-action';

const CreateMilestone = ({ history }) => {
  const [addMilestoneDetails, setAddMilestoneDetails] = useState({
    year: '',
    descOne: '',
    descTwo: '',
    banner: null
  });
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addMilestone);

  const milestoneSuccessCallback = () => {
    history.push('/milestones');
  };

  const handleCreateMilestone = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { year, descOne, descTwo, banner } = addMilestoneDetails;

    if (year && descOne && banner) {
      let newsFormData = new FormData();

      newsFormData.append('month_year', year);
      newsFormData.append('description', descOne);
      newsFormData.append('image_caption', descTwo);
      newsFormData.append('banner_image', banner);

      addMilestone(
        {
          formData: newsFormData,
          milestoneSuccessCallback
        },
        dispatch
      );
    }
  };

  const handleCancel = () => {
    history.push('/milestones');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <MilestoneForm
          milestoneDetails={addMilestoneDetails}
          validated={validated}
          setMilestoneDetails={setAddMilestoneDetails}
          handleCancel={handleCancel}
          handleSubmitMilestone={handleCreateMilestone}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateMilestone;
