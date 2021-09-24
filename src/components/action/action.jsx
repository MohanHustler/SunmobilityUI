import React, { useState, Fragment } from 'react';

import more from '../../assets/images/more.svg';

const Action = ({
  handleEditCategory,
  showDeletePopup,
  setShowDeletePopup,
  data,
  setCategoryId
}) => {
  const [showActionPopup, setShowActionPopup] = useState(false);
  return (
    <Fragment>
      <div
        className="edit-sec"
        onClick={() => setShowActionPopup(!showActionPopup)}
      >
        <img src={more} alt="more" />
      </div>
      {showActionPopup ? (
        <div className="edit-box">
          <ul className="list-unstyled">
            <li onClick={() => handleEditCategory(data)}>Edit</li>
            <li
              onClick={() => {
                setCategoryId(data.id);
                setShowDeletePopup(!showDeletePopup);
                setShowActionPopup(!showActionPopup);
              }}
            >
              Delete
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export default Action;
