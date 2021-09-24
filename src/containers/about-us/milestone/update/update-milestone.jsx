import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { getMilestoneById } from '../list/get-milestone-action';
import MilestoneForm from '../milestone-form';
import { updateMilestone } from './update-milestone-action';

const UpdateMilestone = ({ history, match }) => {
  const [updateMilestoneDetails, setUpdateMilestoneDetails] = useState({
    year: '',
    descOne: '',
    descTwo: '',
    banner: null
  });
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateMilestone);

  useEffect(() => {
    if (match.params.id) {
      getMilestoneById({ id: match.params.id }, dispatch);
    }
  }, [match.params, dispatch]);

  const { milestoneData, isEditMilestoneLoading } = useSelector(
    (state) => state.getMilestoneById
  );

  useEffect(() => {
    if (Object.keys(milestoneData).length) {
      setUpdateMilestoneDetails({
        year: milestoneData.month_year || '',
        descOne: milestoneData.description || '',
        descTwo: milestoneData.image_caption || '',
        banner: milestoneData.banner_image || null
      });
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [milestoneData]);

  const milestoneSuccessCallback = () => {
    history.push('/milestones');
  };
  const handleSubmitMilestone = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);
    const { year, descOne, descTwo, banner } = updateMilestoneDetails;

    if (year && descOne && banner) {
      let newsFormData = new FormData();

      newsFormData.append('month_year', year);
      newsFormData.append('description', descOne);
      newsFormData.append('image_caption', descTwo);

      if (banner && typeof banner === 'object') {
        newsFormData.append('banner_image', banner);
      }

      updateMilestone(
        {
          formData: newsFormData,
          id: match.params.id,
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
          milestoneDetails={updateMilestoneDetails}
          validated={validated}
          setMilestoneDetails={setUpdateMilestoneDetails}
          handleCancel={handleCancel}
          handleSubmitMilestone={handleSubmitMilestone}
          noData={noData}
          isLoading={isLoading}
          isEditMilestoneLoading={isEditMilestoneLoading}
        />
      </div>
    </div>
  );
};

export default UpdateMilestone;
