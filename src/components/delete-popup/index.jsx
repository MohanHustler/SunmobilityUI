import React from 'react';

import { Button, Modal } from 'react-bootstrap';
import close from '../../assets/images/close.svg';

const DeletePopup = ({ showDeletePopup, setShowDeletePopup, handleDelete }) => {
  return (
    <div>
      <Modal
        show={showDeletePopup}
        onHide={() => setShowDeletePopup(false)}
        animation={false}
        className="continue-popup"
      >
        <div
          className="continue-close"
          onClick={() => setShowDeletePopup(false)}
        >
          <img src={close} alt="text"></img>
        </div>
        <Modal.Body>
          <div className="continue">
            <div className="continue-content">
              <h2>Do you want Delete ?</h2>

              <div className="send-button">
                <Button
                  className="green-btn cancel"
                  onClick={() => setShowDeletePopup(false)}
                >
                  No
                </Button>
                <Button className="green-btn" onClick={handleDelete}>
                  Yes
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DeletePopup;
