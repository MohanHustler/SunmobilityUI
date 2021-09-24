import React from 'react';
import { Modal, Button } from 'react-bootstrap';

import close from '../../assets/images/close.svg';

const DeleteCategory = ({ show, setShowDeletePopup, handleDeleteCategory }) => {
  return (
    <Modal
      show={show}
      onHide={() => setShowDeletePopup(false)}
      animation={false}
      className="continue-popup"
    >
      <div className="continue-close" onClick={() => setShowDeletePopup(false)}>
        <img src={close} alt="text"></img>
      </div>
      <Modal.Body>
        <div className="continue">
          <div className="continue-content">
            <h2>Deleting this will delete all content inside caegory</h2>

            <div className="send-button">
              <Button
                className="green-btn cancel"
                onClick={() => setShowDeletePopup(false)}
              >
                Cancel
              </Button>
              <Button className="green-btn red" onClick={handleDeleteCategory}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteCategory;
