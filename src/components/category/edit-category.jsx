import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import close from '../../assets/images/close.svg';

const EditCategory = ({
  show,
  setshowEditPopup,
  setShowDeletePopup,
  currentCategory,
  currentCategoryId,
  setDeleteCategoryId,
  handleUpdateCategory
}) => {
  const [editCategory, setEditCategory] = useState('');

  useEffect(() => {
    setEditCategory(currentCategory);
  }, [currentCategory]);

  return (
    <Modal
      show={show}
      onHide={() => setshowEditPopup(false)}
      animation={false}
      className="continue-popup"
    >
      <div className="continue-close" onClick={() => setshowEditPopup(false)}>
        <img src={close} alt="text"></img>
      </div>
      <Modal.Body>
        <div className="continue">
          <div className="continue-content">
            <h2>Edit Category</h2>
            <div className="delete-section">
              <div className="content-delete">
                <div className="custom-input">
                  <Form.Control
                    type="text"
                    value={editCategory}
                    onChange={(e) => setEditCategory(e.target.value)}
                  />
                </div>
                <Button
                  className="green-btn red"
                  onClick={() => {
                    setShowDeletePopup(true);
                    setDeleteCategoryId(currentCategoryId);
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>

            <div className="send-button">
              <Button
                className="green-btn cancel"
                onClick={() => setshowEditPopup(false)}
              >
                Cancel
              </Button>
              <Button
                className="green-btn"
                onClick={() => {
                  setDeleteCategoryId(currentCategoryId);
                  handleUpdateCategory(editCategory);
                }}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EditCategory;
