import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import Header from '../../../../components/header';
import Sidebar from '../../../../components/sidebar';
import PaginationList from '../../../../components/pagination';
import DeletePopup from '../../../../components/delete-popup';
import { getCoverage } from './coverage-action';
import { deleteCoverage } from '../delete/delete-coverage-action';

import Category from '../../category';
import AddCategory from '../../../../components/category/add-category';
import EditCategory from '../../../../components/category/edit-category';
import DeleteCategory from '../../../../components/category/delete-category';
import { getCategory } from '../../category/list/category-action';
import { addCategory } from '../../category/create/create-category-action';
import { updateCategory } from '../../category/update/update-category-action';
import { deleteCategory } from '../../category/delete/delete-category-action';
import Action from '../../../../components/action/action';

import plus from '../../../../assets/images/plus.png';
import Loader from '../../../../components/loader';

const ListCoverage = ({ history }) => {
  const [showAddPopup, setshowAddPopup] = useState(false);
  const [showEditPopup, setshowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [showCoverageDeletePopup, setShowCoverageDeletePopup] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [deleteCategoryId, setDeleteCategoryId] = useState('');
  const [coverageId, setCoverageId] = useState('');
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const dispatch = useDispatch();

  const getCoverageDetails = (
    currentPageNo,
    pageSize,
    category_id = currentCategoryId
  ) => {
    getCoverage(
      {
        category_id,
        pageNumber: currentPageNo,
        pageSize: pageSize
      },
      dispatch
    );
  };

  useEffect(() => {
    getCategory({ indicator: 'coverages' }, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { categoryList } = useSelector((state) => state.getCategory);

  let yearCat = [],
    stringCat = [];
  categoryList.forEach((category) => {
    if (!isNaN(category.display_name)) {
      yearCat.push(category);
    } else {
      stringCat.push(category);
    }
  });
  yearCat = yearCat.sort((a, b) => b.display_name - a.display_name);
  stringCat = stringCat.sort();
  const categorySortedList = [...stringCat, ...yearCat];

  useEffect(() => {
    setCurrentCategory(
      categorySortedList.length ? categorySortedList[0].display_name : ''
    );
    setCurrentCategoryId(
      categorySortedList.length ? categorySortedList[0].id : ''
    );
    if (categorySortedList.length) {
      getCoverageDetails(currentPageNo, pageSize, categorySortedList[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryList]);

  useEffect(() => {
    getCoverageDetails(currentPageNo, pageSize, currentCategoryId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryId]);

  const { coverageList, isLoading, totalRecords } = useSelector(
    (state) => state.getCoverage
  );

  const addCategorySuccess = (id, displayName) => {
    setCurrentCategory(displayName);
    setCurrentCategoryId(id);
    setCategoryName('');
    setshowAddPopup(!showAddPopup);
    getCategory({ indicator: 'coverages' }, dispatch);
  };

  const handleAddCategory = () => {
    let coverageFormData = new FormData();

    coverageFormData.append('display_name', categoryName);
    coverageFormData.append('indicator', 'coverages');
    addCategory({ formData: coverageFormData, addCategorySuccess }, dispatch);
  };

  const updateCategorySuccess = () => {
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'coverages' }, dispatch);
  };

  const handleUpdateCategory = (updateCategoryName) => {
    let coverageFormData = new FormData();

    coverageFormData.append('display_name', updateCategoryName);
    coverageFormData.append('indicator', 'coverages');
    updateCategory(
      {
        formData: coverageFormData,
        id: currentCategoryId,
        updateCategorySuccess
      },
      dispatch
    );
  };

  const deleteCategorySuccess = () => {
    setShowDeletePopup(!showDeletePopup);
    setshowEditPopup(!showEditPopup);
    getCategory({ indicator: 'coverages' }, dispatch);
  };

  const handleDeleteCategory = () => {
    deleteCategory({ id: deleteCategoryId, deleteCategorySuccess }, dispatch);
  };

  const handleAddCoverage = () => {
    history.push(`/coverages/create/${currentCategory}`);
  };

  const handleEditCoverage = (coverage) => {
    const currentCoverage = categorySortedList.filter(
      (list) => list.id.toString() === coverage.category_id.toString()
    );

    history.push(`/coverages/${coverage.id}/edit/${currentCategory}`, {
      display_name: currentCoverage[0].display_name
    });
  };

  const deleteCoverageSuccess = () => {
    setShowCoverageDeletePopup(!showCoverageDeletePopup);
    getCoverageDetails(currentPageNo, pageSize);
  };
  const handleDeleteCoverage = () => {
    deleteCoverage({ id: coverageId, deleteCoverageSuccess }, dispatch);
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
                    Coverage View
                    <span className="green-btn" onClick={handleAddCoverage}>
                      <img src={plus} alt="logo" /> Add Coverage
                    </span>
                  </h4>
                </div>
                <div className="card-category">
                  <h4>Filter By</h4>
                  <div className="custom-input">
                    <Category
                      categoryList={categorySortedList}
                      indicator="coverages"
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

                <Row>
                  {coverageList &&
                    coverageList.map((coverage) => (
                      <Col md="4" key={coverage.id}>
                        <div className="coverage-card">
                          <div className="news-card-img coverage-img">
                            <img
                              src={
                                coverage.banner_image && coverage.banner_image
                              }
                              alt="logo"
                            />
                            <div className="overlay-cov"></div>
                            <Action
                              handleEditCategory={handleEditCoverage}
                              showDeletePopup={showCoverageDeletePopup}
                              setShowDeletePopup={setShowCoverageDeletePopup}
                              data={coverage}
                              setCategoryId={setCoverageId}
                            />
                          </div>
                          <div className="news-card-text coverage-card-text">
                            <span>
                              <img
                                src={coverage.logo && coverage.logo}
                                alt="logo"
                              />
                            </span>
                            <p>{coverage.heading && coverage.heading}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>

                <DeletePopup
                  showDeletePopup={showCoverageDeletePopup}
                  setShowDeletePopup={setShowCoverageDeletePopup}
                  handleDelete={handleDeleteCoverage}
                />
              </div>
              <PaginationList
                currentPageNo={currentPageNo}
                setCurrentPageNo={setCurrentPageNo}
                pageSize={pageSize}
                setPageSize={setPageSize}
                totalRecords={totalRecords}
                getCurentPageData={getCoverageDetails}
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

export default ListCoverage;
