import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getImageGallery } from './image-gallery-action';
import { deleteImageGallery } from '../delete/delete-image-gallery-action';

import Category from '../../category';
import AddCategory from '../../../../components/category/add-category';
import EditCategory from '../../../../components/category/edit-category';
import DeleteCategory from '../../../../components/category/delete-category';
import { getLaunches } from '../list/get-launches-action';
import { getCategory } from '../../category/list/category-action';
import { addCategory } from '../../category/create/create-category-action';
import { updateCategory } from '../../category/update/update-category-action';
import { deleteCategory } from '../../category/delete/delete-category-action';
import Action from '../../../../components/action/action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListImageGallery = ({ history }) => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showEditPopup, setshowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [showGalleryDeletePopup, setShowGalleryDeletePopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [imageGalleryId, setImageGalleryId] = useState('');
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [launchesWithYear, setLaunchesWithYear] = useState([]);
  const [isLaunchAtWithYear, setIsLaunchAtWithYear] = useState([]);

  const dispatch = useDispatch();

  const getImageGalleryDetails = (
    currentPageNo,
    pageSize,
    category_id = currentCategoryId
  ) => {
    getImageGallery(
      {
        category_id,
        pageNumber: currentPageNo,
        pageSize: pageSize
      },
      dispatch
    );
  };

  useEffect(() => {
    getCategory({ indicator: 'image_galleries' }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { categoryList } = useSelector((state) => state.getCategory);
  const { launchData } = useSelector((state) => state.getLaunches);

  useEffect(() => {
    setCurrentCategory(categoryList.length ? categoryList[0].display_name : '');
    setCurrentCategoryId(categoryList.length ? categoryList[0].id : '');
    if (categoryList.length) {
      getImageGalleryDetails(currentPageNo, pageSize, categoryList[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  useEffect(() => {
    getImageGalleryDetails(currentPageNo, pageSize, currentCategoryId);
    getLaunches({ id: currentCategoryId }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryId]);

  useEffect(() => {
    if (launchData) {
      let imageTitle = [
        ...new Map(
          launchData.map((item) => [item['launch_at_with_year'], item])
        ).values()
      ].map((el) => el.launch_at_with_year);

      setLaunchesWithYear(imageTitle);
      setIsLaunchAtWithYear(
        imageTitle.some(function (el) {
          return el !== null;
        })
      );
    }
  }, [currentCategory, launchData]);

  const { imageGalleryList, isLoading, totalRecords } = useSelector(
    (state) => state.getImageGallery
  );

  const handleAddImageGallery = () => {
    history.push(`/imagegalleries/create/${currentCategory}`);
  };

  const handleEditImageGallery = (imageGallery) => {
    const currentImageGallery = categoryList.filter(
      (list) => list.id.toString() === imageGallery.category_id.toString()
    );
    history.push(`/imagegalleries/${imageGallery.id}/edit/${currentCategory}`, {
      display_name: currentImageGallery[0].display_name
    });
  };

  const deleteImageGallerySuccess = () => {
    setShowGalleryDeletePopup(!showGalleryDeletePopup);
    getImageGalleryDetails(currentPageNo, pageSize, currentCategoryId);
  };
  const handleDeleteImageGallery = () => {
    deleteImageGallery(
      { id: imageGalleryId, deleteImageGallerySuccess },
      dispatch
    );
  };

  const addCategorySuccess = (id, displayName) => {
    setCurrentCategory(displayName);
    setCurrentCategoryId(id);
    setCategoryName('');
    setshowAddPopup(!showAddPopup);
    getCategory({ indicator: 'image_galleries' }, dispatch);
  };

  const handleAddCategory = () => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', categoryName);
    categoryFormData.append('indicator', 'image_galleries');

    addCategory({ formData: categoryFormData, addCategorySuccess }, dispatch);
  };

  const updateCategorySuccess = () => {
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'image_galleries' }, dispatch);
  };

  const handleUpdateCategory = (updateCategoryName) => {
    let categoryFormData = new FormData();

    categoryFormData.append('display_name', updateCategoryName);
    categoryFormData.append('indicator', 'image_galleries');
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
    getCategory({ indicator: 'image_galleries' }, dispatch);
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
          imageGalleryList &&
          imageGalleryList.filter(
            (imageGallery) => imageGallery.launch_at_with_year === launchTitle
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
                    Image Gallery View
                    <span className="green-btn" onClick={handleAddImageGallery}>
                      <img src={plus} alt="logo" /> Add Image Gallery
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
                      <li onClick={() => setshowAddPopup(!showAddPopup)}>
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
                              {launchData[0].launch_at_with_year}
                            </h4>
                          ) : (
                            ''
                          )}
                          {launchData.length ? (
                            <Row>
                              {launchData.map((imageGallery) => (
                                <Col md="4" key={imageGallery.id}>
                                  <div className="coverage-card">
                                    <div className="news-card-img">
                                      <img
                                        src={
                                          imageGallery.image &&
                                          imageGallery.image
                                        }
                                        alt="logo"
                                      />
                                      <div className="overlay-cov"></div>
                                      <Action
                                        handleEditCategory={
                                          handleEditImageGallery
                                        }
                                        showDeletePopup={showGalleryDeletePopup}
                                        setShowDeletePopup={
                                          setShowGalleryDeletePopup
                                        }
                                        data={imageGallery}
                                        setCategoryId={setImageGalleryId}
                                      />
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
                    {imageGalleryList &&
                      imageGalleryList.map((imageGallery) => (
                        <Col md="4" key={imageGallery.id}>
                          <div className="coverage-card">
                            <div className="news-card-img">
                              <img
                                src={imageGallery.image && imageGallery.image}
                                alt="logo"
                              />
                              <div className="overlay-cov"></div>
                              <Action
                                handleEditCategory={handleEditImageGallery}
                                showDeletePopup={showGalleryDeletePopup}
                                setShowDeletePopup={setShowGalleryDeletePopup}
                                data={imageGallery}
                                setCategoryId={setImageGalleryId}
                              />
                            </div>
                          </div>
                        </Col>
                      ))}
                  </Row>
                )}

                <DeletePopup
                  showDeletePopup={showGalleryDeletePopup}
                  setShowDeletePopup={setShowGalleryDeletePopup}
                  handleDelete={handleDeleteImageGallery}
                />
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getImageGalleryDetails}
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

export default ListImageGallery;
