import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Modal } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getVideo } from './video-action';
import { deleteVideo } from '../delete/delete-video-action';

import Category from '../../category';
import AddCategory from '../../../../components/category/add-category';
import EditCategory from '../../../../components/category/edit-category';
import DeleteCategory from '../../../../components/category/delete-category';
import { getCategory } from '../../category/list/category-action';
import { addCategory } from '../../category/create/create-category-action';
import { updateCategory } from '../../category/update/update-category-action';
import { deleteCategory } from '../../category/delete/delete-category-action';
import Action from '../../../../components/action/action';
import { videoDateFormater } from '../../../../utils/formattor';

import close from '../../../../assets/images/close.svg';
import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListVideo = ({ history }) => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showEditPopup, setshowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [showVideoDeletePopup, setShowVideoDeletePopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [videoId, setVideoId] = useState('');
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();

  const getVideoDetails = (
    currentPageNo,
    pageSize,
    category_id = currentCategoryId
  ) => {
    getVideo(
      {
        category_id,
        pageNumber: currentPageNo,
        pageSize: pageSize
      },
      dispatch
    );
  };

  useEffect(() => {
    getCategory({ indicator: 'videos' }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { categoryList } = useSelector((state) => state.getCategory);

  useEffect(() => {
    setCurrentCategory(categoryList.length ? categoryList[0].display_name : '');
    setCurrentCategoryId(categoryList.length ? categoryList[0].id : '');
    if (categoryList.length) {
      getVideoDetails(currentPageNo, pageSize, categoryList[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  useEffect(() => {
    getVideoDetails(currentPageNo, pageSize, currentCategoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryId]);

  const { videoList, isLoading, totalRecords } = useSelector(
    (state) => state.getVideo
  );

  const handleAddVideo = () => {
    history.push(`/videos/create/${currentCategory}`);
  };

  const handleEditVideo = (video) => {
    const currentVideo = categoryList.filter(
      (list) => list.id.toString() === video.category_id.toString()
    );
    history.push(`/videos/${video.id}/edit/${currentCategory}`, {
      display_name: currentVideo[0].display_name
    });
  };

  const deleteVideoSuccess = () => {
    setShowVideoDeletePopup(!showVideoDeletePopup);
    getVideoDetails(currentPageNo, pageSize, currentCategoryId);
  };
  const handleDeleteVideo = () => {
    deleteVideo({ id: videoId, deleteVideoSuccess }, dispatch);
  };

  const addCategorySuccess = (id, displayName) => {
    setCurrentCategory(displayName);
    setCurrentCategoryId(id);
    setCategoryName('');
    setshowAddPopup(!showAddPopup);
    getCategory({ indicator: 'videos' }, dispatch);
  };

  const handleAddCategory = () => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', categoryName);
    categoryFormData.append('indicator', 'videos');
    addCategory({ formData: categoryFormData, addCategorySuccess }, dispatch);
  };

  const updateCategorySuccess = () => {
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'videos' }, dispatch);
  };

  const handleUpdateCategory = (updateCategoryName) => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', updateCategoryName);
    categoryFormData.append('indicator', 'videos');

    updateCategory(
      {
        formData: categoryFormData,
        id: currentCategoryId,
        updateCategorySuccess
      },
      dispatch
    );
  };

  const deleteCategorySuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'videos' }, dispatch);
  };

  const handleDeleteCategory = () => {
    deleteCategory({ id: deleteCategoryId, deleteCategorySuccess }, dispatch);
  };

  const [showYoutube, setShowYoutube] = useState(false);

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
                    Videos View
                    <span className="green-btn" onClick={handleAddVideo}>
                      <img src={plus} alt="logo" /> Add Video
                    </span>
                  </h4>
                </div>
                <div className="card-category">
                  <h4>Filter By</h4>
                  <div className="custom-input">
                    <Category
                      categoryList={categoryList}
                      currentCategory={currentCategory}
                      setCurrentCategory={setCurrentCategory}
                      setCurrentCategoryId={setCurrentCategoryId}
                    />
                  </div>
                  <div className="add-category">
                    <ul className="list-unstyled">
                      <li onClick={() => setshowEditPopup(!showAddPopup)}>
                        Edit Filter
                      </li>
                      <li></li>
                      <li onClick={() => setshowAddPopup(!showAddPopup)}>
                        Add Filter
                      </li>
                    </ul>
                  </div>
                </div>

                <Row>
                  {videoList &&
                    videoList.map((video) => (
                      <Col md="4" key={video.id}>
                        <div className="coverage-card">
                          <div className="news-card-img">
                            <img
                              src={video.banner && video.banner}
                              alt="logo"
                            />
                            <div
                              className="watch-video-icon"
                              onClick={() => setShowYoutube(true)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 42.7 42.7"
                              >
                                <path
                                  className="a"
                                  d="M21.741-50A21.369,21.369,0,0,0,.391-28.65,21.369,21.369,0,0,0,21.741-7.3a21.369,21.369,0,0,0,21.35-21.35A21.369,21.369,0,0,0,21.741-50Zm6.877,22.429-10.068,6.7a1.3,1.3,0,0,1-2.023-1.079V-35.347a1.3,1.3,0,0,1,2.023-1.079l10.068,6.7A1.3,1.3,0,0,1,28.618-27.571Z"
                                  transform="translate(-0.391 50)"
                                />
                              </svg>
                            </div>
                            <div className="overlay-cov"></div>
                            <Action
                              handleEditCategory={handleEditVideo}
                              showDeletePopup={showVideoDeletePopup}
                              setShowDeletePopup={setShowVideoDeletePopup}
                              data={video}
                              setCategoryId={setVideoId}
                            />
                          </div>
                          <div className="news-card-text coverage-card-text video-text">
                            <p>{video.heading && video.heading}</p>
                            <label>{`by ${
                              video.author && video.author
                            }`}</label>
                            {/* <span>1,677 views • Dec 6, 2018</span> */}
                            <span>{`${video.views && video.views} views • ${
                              video.release_date &&
                              videoDateFormater(video.release_date)
                            }`}</span>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>

                <DeletePopup
                  showDeletePopup={showVideoDeletePopup}
                  setShowDeletePopup={setShowVideoDeletePopup}
                  handleDelete={handleDeleteVideo}
                />
                <Modal
                  show={showYoutube}
                  onHide={() => setShowYoutube(false)}
                  animation={false}
                  className="watch-youtube"
                >
                  <div
                    className="continue-close"
                    onClick={() => setShowYoutube(false)}
                  >
                    <img src={close} alt="text"></img>
                  </div>
                  <Modal.Body>
                    <div>
                      <iframe
                        title="1"
                        src="https://www.youtube.com/embed/VD0zL5Eb6A4?showinfo=0&rel=0&autoplay=1&mute=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen={true}
                        width="100%"
                        height="570px"
                      ></iframe>
                    </div>
                  </Modal.Body>
                </Modal>
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getVideoDetails}
              />
              <AddCategory
                show={showAddPopup}
                setshowAddPopup={setshowAddPopup}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                handleAddCategory={handleAddCategory}
              />
              <EditCategory
                show={showEditPopup}
                setshowEditPopup={setshowEditPopup}
                setShowDeletePopup={setShowDeletePopup}
                currentCategory={currentCategory}
                currentCategoryId={currentCategoryId}
                setDeleteCategoryId={setDeleteCategoryId}
                handleUpdateCategory={handleUpdateCategory}
              />
              <DeleteCategory
                show={showDeletePopup}
                setShowDeletePopup={setShowDeletePopup}
                handleDeleteCategory={handleDeleteCategory}
              />
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListVideo;
