import React from 'react';
import LoaderGif from '../../assets/images/page-loader.gif';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-container">
        <img src={LoaderGif} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
