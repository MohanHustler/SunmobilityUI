import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import close from '../../assets/images/close.svg';

const AddCategory = ({
  show,
  setshowAddPopup,
  categoryName,
  setCategoryName,
  handleAddCategory
}) => {
  return (
    <Modal
      show={show}
      onHide={() => setshowAddPopup(false)}
      animation={false}
      className="continue-popup"
    >
      <div className="continue-close" onClick={() => setshowAddPopup(false)}>
        <img src={close} alt="text"></img>
      </div>
      <Modal.Body>
        <div className="continue">
          <div className="continue-content">
            <h2>Add Category</h2>
            <div className="custom-input">
              <Form.Control
                type="text"
                placeholder="Enter Category"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>

            <div className="send-button">
              <Button
                className="green-btn cancel"
                onClick={() => setshowAddPopup(false)}
              >
                Cancel
              </Button>
              <Button className="green-btn" onClick={handleAddCategory}>
                Add
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddCategory;
