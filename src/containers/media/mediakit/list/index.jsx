import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getMediakit } from './mediakit-action';
import { deleteMediakit } from '../delete/delete-mediakit-action';

import Category from '../../category';
import AddCategory from '../../../../components/category/add-category';
import EditCategory from '../../../../components/category/edit-category';
import DeleteCategory from '../../../../components/category/delete-category';
import { getCategory } from '../../category/list/category-action';
import { addCategory } from '../../category/create/create-category-action';
import { updateCategory } from '../../category/update/update-category-action';
import { deleteCategory } from '../../category/delete/delete-category-action';
import Action from '../../../../components/action/action';

import download from '../../../../assets/images/download.svg';
import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListMediakit = ({ history }) => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showEditPopup, setshowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [showMediaDeletePopup, setShowMediaDeletePopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [mediakitId, setMediakitId] = useState('');
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [launchesWithYear, setLaunchesWithYear] = useState([]);
  const [isLaunchAtWithYear, setIsLaunchAtWithYear] = useState([]);

  const dispatch = useDispatch();

  const getMediakitDetails = (
    currentPageNo,
    pageSize,
    category_id = currentCategoryId
  ) => {
    getMediakit(
      {
        category_id,
        pageNumber: currentPageNo,
        pageSize: pageSize
      },
      dispatch
    );
  };

  useEffect(() => {
    getCategory({ indicator: 'media_kits' }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { categoryList } = useSelector((state) => state.getCategory);

  useEffect(() => {
    setCurrentCategory(categoryList.length ? categoryList[0].display_name : '');
    setCurrentCategoryId(categoryList.length ? categoryList[0].id : '');
    if (categoryList.length) {
      getMediakitDetails(currentPageNo, pageSize, categoryList[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  useEffect(() => {
    getMediakitDetails(currentPageNo, pageSize, currentCategoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryId]);

  const { mediakitList, isLoading, totalRecords } = useSelector(
    (state) => state.getMediakit
  );

  useEffect(() => {
    if (mediakitList) {
      let imageTitle = [
        ...new Map(
          mediakitList.map((item) => [item['under_section_by'], item])
        ).values()
      ].map((el) => el.under_section_by);

      if (imageTitle) {
        setLaunchesWithYear(imageTitle);
      }

      setIsLaunchAtWithYear(
        imageTitle.some(function (el) {
          return el !== null;
        })
      );
    }
  }, [currentCategory, mediakitList]);

  const handleAddMediakit = () => {
    history.push(`/mediakits/create/${currentCategory}`);
  };

  const handleEditMediakit = (mediakit) => {
    const currentMediakit = categoryList.filter(
      (list) => list.id.toString() === mediakit.category_id.toString()
    );
    history.push(`/mediakits/${mediakit.id}/edit/${currentCategory}`, {
      display_name: currentMediakit[0].display_name
    });
  };

  const deleteMediakitSuccess = () => {
    setShowMediaDeletePopup(!showMediaDeletePopup);
    getMediakitDetails(currentPageNo, pageSize, currentCategoryId);
  };
  const handleDeleteMediakit = () => {
    deleteMediakit({ id: mediakitId, deleteMediakitSuccess }, dispatch);
  };

  const addCategorySuccess = (id, displayName) => {
    setCurrentCategory(displayName);
    setCurrentCategoryId(id);
    setCategoryName('');
    setshowAddPopup(!showAddPopup);
    getCategory({ indicator: 'media_kits' }, dispatch);
  };

  const handleAddCategory = () => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', categoryName);
    categoryFormData.append('indicator', 'media_kits');
    addCategory({ formData: categoryFormData, addCategorySuccess }, dispatch);
  };

  const updateCategorySuccess = () => {
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'media_kits' }, dispatch);
  };

  const handleUpdateCategory = (updateCategoryName) => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', updateCategoryName);
    categoryFormData.append('indicator', 'media_kits');

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
    getCategory({ indicator: 'media_kits' }, dispatch);
  };

  const handleDeleteCategory = () => {
    deleteCategory({ id: deleteCategoryId, deleteCategorySuccess }, dispatch);
  };

  let launchImgaeGallery = [];
  if (isLaunchAtWithYear) {
    launchImgaeGallery =
      launchesWithYear &&
      launchesWithYear.map(
        (launchTitle) =>
          mediakitList &&
          mediakitList.filter(
            (mediakit) => mediakit.under_section_by === launchTitle
          )
      );

    launchImgaeGallery.length &&
      launchImgaeGallery[0].length &&
      launchImgaeGallery.sort((x, y) => y[0].id - x[0].id);
  }

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
                    Media Kit View
                    <span className="green-btn" onClick={handleAddMediakit}>
                      <img src={plus} alt="logo" /> Add Mediakit
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
                      <li onClick={() => setshowEditPopup(!showEditPopup)}>
                        Edit Filter
                      </li>
                      <li></li>
                      <li onClick={() => setshowAddPopup(!showEditPopup)}>
                        Add Filter
                      </li>
                    </ul>
                  </div>
                </div>

                {isLaunchAtWithYear ? (
                  <Fragment>
                    {launchImgaeGallery &&
                      launchImgaeGallery.map((launchData, index) => (
                        <Fragment key={index}>
                          {launchData.length ? (
                            <h4 className="launches-header" key={index}>
                              {launchData[0].under_section_by}
                            </h4>
                          ) : (
                            ''
                          )}
                          {launchData.length ? (
                            <Row>
                              {launchData.map((mediakit) => (
                                <Col md="4" key={mediakit.id}>
                                  <div className="coverage-card">
                                    <div className="news-card-img">
                                      <img
                                        src={
                                          mediakit.banner_image &&
                                          mediakit.banner_image
                                        }
                                        alt="logo"
                                      />
                                      <div className="overlay-cov"></div>
                                      <Action
                                        handleEditCategory={handleEditMediakit}
                                        showDeletePopup={showMediaDeletePopup}
                                        setShowDeletePopup={
                                          setShowMediaDeletePopup
                                        }
                                        data={mediakit}
                                        setCategoryId={setMediakitId}
                                      />
                                    </div>
                                    <div className="news-card-text coverage-card-text video-text">
                                      <h2>
                                        {mediakit.heading && mediakit.heading}
                                      </h2>
                                      {!mediakit.downloadable_file &&
                                      mediakit.description ? (
                                        <p>
                                          {mediakit.description &&
                                            mediakit.description}
                                        </p>
                                      ) : (
                                        <>
                                          <p>
                                            {mediakit.downloadable_type &&
                                              mediakit.downloadable_type}
                                          </p>
                                          <span className="download">
                                            <img src={download} alt="logo" />
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          ) : (
                            ''
                          )}
                        </Fragment>
                      ))}
                  </Fragment>
                ) : (
                  <Row>
                    {mediakitList &&
                      mediakitList.map((mediakit) => (
                        <Col md="4" key={mediakit.id}>
                          <div className="coverage-card">
                            <div className="news-card-img">
                              <img
                                src={
                                  mediakit.banner_image && mediakit.banner_image
                                }
                                alt="logo"
                              />
                              <div className="overlay-cov"></div>
                              <Action
                                handleEditCategory={handleEditMediakit}
                                showDeletePopup={showMediaDeletePopup}
                                setShowDeletePopup={setShowMediaDeletePopup}
                                data={mediakit}
                                setCategoryId={setMediakitId}
                              />
                            </div>
                            <div className="news-card-text coverage-card-text video-text">
                              <h2>{mediakit.heading && mediakit.heading}</h2>
                              <p>
                                {mediakit.downloadable_type &&
                                  mediakit.downloadable_type}
                              </p>
                              <span className="download">
                                <img src={download} alt="logo" />
                              </span>
                            </div>
                          </div>
                        </Col>
                      ))}
                  </Row>
                )}

                <DeletePopup
                  showDeletePopup={showMediaDeletePopup}
                  setShowDeletePopup={setShowMediaDeletePopup}
                  handleDelete={handleDeleteMediakit}
                />
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getMediakitDetails}
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
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
                currentCategoryId={currentCategoryId}
                setshowEditPopup={setshowEditPopup}
                setShowDeletePopup={setShowDeletePopup}
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

export default ListMediakit;
