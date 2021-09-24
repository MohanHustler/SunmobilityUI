import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import { getNetworkById } from '../list/get_network_action';
import { updateNetwork } from './update-network-action';
import NetworkForm from '../network-form';

const UpdateNetwork = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [noData, setnoData] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.updateNetwork);

  useEffect(() => {
    if (match.params.id) {
      getNetworkById({ id: match.params.id }, dispatch);
    }
  }, [match.params, dispatch]);

  const { networkData, isEditNetworkLoading } = useSelector(
    (state) => state.getNetworkById
  );

  useEffect(() => {
    if (Object.keys(networkData).length) {
      setTitle(networkData.title || '');
      setnoData(false);
    } else {
      setnoData(true);
    }
  }, [networkData]);

  const networkSuccessCallback = () => {
    history.push('/networks');
  };

  const handleUpdateNetwork = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
    }
    setValidated(true);

    if (title) {
      let newsFormData = new FormData();

      newsFormData.append('title', title);

      updateNetwork(
        {
          formData: newsFormData,
          id: match.params.id,
          networkSuccessCallback
        },
        dispatch
      );
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
          handleSubmitNetwork={handleUpdateNetwork}
          noData={noData}
          isLoading={isLoading}
          isEditNetworkLoading={isEditNetworkLoading}
        />
      </div>
    </div>
  );
};

export default UpdateNetwork;
