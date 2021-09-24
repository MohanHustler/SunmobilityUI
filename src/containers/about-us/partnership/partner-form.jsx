import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap';

import close from '../../../assets/images/close.png';

const PartnerForm = ({ partnerList, setPartnerList, validated }) => {
  return (
    <Fragment>
      <div className="custom-input">
        <label>
          Client Logo (145 × 40)<span className="required-char">*</span>
        </label>
        {typeof partnerList.logo === 'string' ? (
          <div className="logo-img-container">
            <img src={partnerList.logo} alt="banner" />
            <div
              className="img-close-icon"
              onClick={() => setPartnerList({ ...partnerList, logo: null })}
            >
              <img src={close} alt="logo" />
            </div>
          </div>
        ) : (
          <Fragment>
            <Form.File
              className={`${
                validated && partnerList.logo === null && 'required-file'
              }`}
              id="exampleFormControlFile1"
              onChange={(e) =>
                setPartnerList({ ...partnerList, logo: e.target.files[0] })
              }
            />
            {validated && partnerList.logo === null && (
              <span className="required-file-feedback">
                Please upload client logo.
              </span>
            )}
          </Fragment>
        )}
      </div>
      <div className="custom-input">
        <label>
          Client Description<span className="required-char">*</span>
        </label>
        <Form.Control
          required
          as="textarea"
          rows="5"
          placeholder="Enter Description"
          value={partnerList.description}
          onChange={(e) =>
            setPartnerList({ ...partnerList, description: e.target.value })
          }
        />
        <Form.Control.Feedback type="invalid">
          Please enter client description.
        </Form.Control.Feedback>
      </div>
    </Fragment>
  );
};

export default PartnerForm;
