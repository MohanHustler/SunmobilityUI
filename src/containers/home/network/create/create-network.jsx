import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import NetworkForm from '../network-form';
import { addNetwork } from './create-network-action';

const CreateNetwork = ({ history }) => {
  const [title, setTitle] = useState('');
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.addNetwork);

  const networkSuccessCallback = () => {
    history.push('/networks');
  };

  const handleCreateNetwork = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);

    if (title) {
      let newsFormData = new FormData();

      newsFormData.append('title', title);

      addNetwork({ formData: newsFormData, networkSuccessCallback }, dispatch);
    }
  };

  const handleCancel = () => {
    setTitle('');
    history.push('/networks');
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <NetworkForm
          title={title}
          validated={validated}
          setTitle={setTitle}
          handleCancel={handleCancel}
          handleSubmitNetwork={handleCreateNetwork}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default CreateNetwork;
