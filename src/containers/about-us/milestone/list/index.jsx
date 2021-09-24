import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getMilestone } from './milestone-action';
import { deleteMilestone } from '../delete/delete-milestone-action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListMilestone = ({ history }) => {
  const [milestoneId, setMilestoneId] = useState('');
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();

  const getMilestoneDetails = (currentPageNo, pageSize) => {
    getMilestone({ pageNumber: currentPageNo, pageSize: pageSize }, dispatch);
  };

  useEffect(() => {
    getMilestoneDetails(currentPageNo, pageSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { milestoneList, isLoading, totalRecords } = useSelector(
    (state) => state.getMilestone
  );

  const handleAddMilestone = () => {
    history.push('/milestones/create');
  };

  const handleEditMilestone = (milestone) => {
    history.push(`/milestones/${milestone.id}/edit`);
  };
  const deleteMilestoneSuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    getMilestoneDetails(currentPageNo, pageSize);
  };

  const handleDeleteMilestone = () => {
    deleteMilestone({ id: milestoneId, deleteMilestoneSuccess }, dispatch);
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-container">
          {!isLoading ? (
            <div className="dashboard-inner-container">
              <div className="news-view">
                <div className="signin-card-head">
                  <h4>
                    Milestone View
                    <span className="green-btn" onClick={handleAddMilestone}>
                      <img src={plus} alt="logo" /> Add Milestone
                    </span>
                  </h4>
                </div>

                {milestoneList &&
                  milestoneList.map((milestone) => (
                    <div
                      className="news-card milestone-card"
                      key={milestone.id}
                    >
                      <Row>
                        <Col className="pad0">
                          <div className="news-card-img">
                            <img
                              src={
                                milestone.banner_image && milestone.banner_image
                              }
                              alt="logo"
                            />
                            <div className="overlay"></div>
                            <div className="milestone-text">
                              <p>
                                {milestone.image_caption &&
                                  milestone.image_caption}
                              </p>
                            </div>
                          </div>
                        </Col>

                        <Col>
                          <div className="news-card-text">
                            <h4>
                              {milestone.description && milestone.description}
                            </h4>
                            <div className="bottom-section">
                              <span>
                                <label>
                                  {milestone.month_year && milestone.month_year}
                                </label>
                              </span>
                              <div className="button-section">
                                <ul className="list-unstyled">
                                  <li
                                    onClick={() =>
                                      handleEditMilestone(milestone)
                                    }
                                  >
                                    Edit
                                  </li>
                                  <li></li>
                                  <li
                                    onClick={() => {
                                      setMilestoneId(milestone.id);
                                      setShowDeletePopup(!showDeletePopup);
                                    }}
                                  >
                                    Delete
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  ))}
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getMilestoneDetails}
              />
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>

      <DeletePopup
        showDeletePopup={showDeletePopup}
        setShowDeletePopup={setShowDeletePopup}
        handleDelete={handleDeleteMilestone}
      />
    </div>
  );
};

export default ListMilestone;
