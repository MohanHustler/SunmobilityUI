import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import DeletePopup from '../../../../components/delete-popup';
import { getNetwork } from './network-action';
import { deleteNetwork } from '../delete/delete-network-action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListNetwork = ({ history }) => {
  const [networkId, setNetworkId] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const dispatch = useDispatch();

  const getNetworkDetails = (currentPageNo, pageSize) => {
    getNetwork({ pageNumber: currentPageNo, pageSize: pageSize }, dispatch);
  };

  useEffect(() => {
    getNetworkDetails(1, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { networkList, isLoading } = useSelector((state) => state.getNetwork);

  const handleAddNetwork = () => {
    history.push('/networks/create');
  };

  const handleEditNetwork = (network) => {
    history.push(`/networks/${network.id}/edit`);
  };

  const deleteNetworkSuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    getNetworkDetails(1, 10);
  };

  const handleDeleteNetwork = () => {
    deleteNetwork({ id: networkId, deleteNetworkSuccess }, dispatch);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />

        <div className="dashboard-container">
          {!isLoading ? (
            <div className="dashboard-inner-container network-inner-container">
              <div className="news-view">
                <div className="signin-card-head">
                  <h4>
                    Network View
                    {!networkList.length && (
                      <span
                        className="green-btn"
                        onClick={() => handleAddNetwork()}
                      >
                        <img src={plus} alt="logo" /> Add Network
                      </span>
                    )}
                  </h4>
                </div>

                {networkList[0] ? (
                  <div className="network">
                    <div className="news-card-text">
                      <div className="bottom-section">
                        <h4>{networkList[0] && networkList[0].title}</h4>
                        <div className="button-section">
                          <ul className="list-unstyled">
                            <li
                              onClick={() =>
                                handleEditNetwork(
                                  networkList[0] && networkList[0]
                                )
                              }
                            >
                              Edit
                            </li>
                            <li></li>
                            <li
                              onClick={() => {
                                setNetworkId(
                                  networkList[0] && networkList[0].id
                                );
                                setShowDeletePopup(!showDeletePopup);
                              }}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Form>No network data found</Form>
                )}

                <DeletePopup
                  showDeletePopup={showDeletePopup}
                  setShowDeletePopup={setShowDeletePopup}
                  handleDelete={handleDeleteNetwork}
                />
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListNetwork;
