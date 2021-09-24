import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../assets/images/arrow-right1.png';
import arrow1 from '../../assets/images/arrow-right2.png';

const Sidebar = () => {
  const [show, toggleShow] = React.useState(true);
  const [show1, toggleShow1] = React.useState(true);
  const [show2, toggleShow2] = React.useState(true);
  const [active, setActive] = useState('');

  useEffect(() => {
    setActive(window.location.pathname);
    if (
      window.location.pathname === '/milestones' ||
      window.location.pathname === '/partnership' ||
      window.location.pathname === '/coverages' ||
      window.location.pathname === '/imagegalleries' ||
      window.location.pathname === '/videos' ||
      window.location.pathname === '/mediakits'
    ) {
      // toggleShow1(true);
      // toggleShow(false);
    }
  }, []);

  useEffect(() => {
    if (active.includes('/networks') || active.includes('/news')) {
      toggleShow(true);
    }
    if (active.includes('/milestones') || active.includes('/partnership')) {
      toggleShow1(true);
    }
    if (
      active.includes('/coverages') ||
      active.includes('/imagegalleries') ||
      active.includes('/videos') ||
      active.includes('/mediakits')
    ) {
      toggleShow2(true);
    }
  }, [active]);

  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="head" onClick={() => toggleShow(!show)}>
            <label>Home</label>
            {!show && (
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            )}
            {show && (
              <span>
                <img src={arrow1} alt="arrow" />
              </span>
            )}
          </div>
          {show && (
            <div className="head-list">
              <Link
                className={`${active.includes('/networks') && 'active'}`}
                to="/networks"
              >
                Network
              </Link>
              <Link
                className={`${active.includes('/news') && 'active'}`}
                to="/news"
              >
                News
              </Link>
            </div>
          )}
        </li>
        <li>
          <div className="head" onClick={() => toggleShow1(!show1)}>
            <label>About Us</label>
            {!show1 && (
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            )}
            {show1 && (
              <span>
                <img src={arrow1} alt="arrow" />
              </span>
            )}
          </div>
          {show1 && (
            <div className="head-list">
              <Link
                to="/milestones"
                className={`${active.includes('/milestones') && 'active'}`}
              >
                Milestone
              </Link>
              <Link
                to="/partnership"
                className={`${active.includes('/partnership') && 'active'}`}
              >
                Partnership
              </Link>
            </div>
          )}
        </li>
        <li>
          <div className="head" onClick={() => toggleShow2(!show2)}>
            <label>Media</label>
            {!show2 && (
              <span>
                <img src={arrow} alt="arrow" />
              </span>
            )}
            {show2 && (
              <span>
                <img src={arrow1} alt="arrow" />
              </span>
            )}
          </div>
          {show2 && (
            <div className="head-list">
              <Link
                to="/coverages"
                className={`${active.includes('/coverages') && 'active'}`}
              >
                Coverage
              </Link>
              <Link
                to="/imagegalleries"
                className={`${active.includes('/imagegalleries') && 'active'}`}
              >
                Image Gallery
              </Link>
              <Link
                to="/videos"
                className={`${active.includes('/videos') && 'active'}`}
              >
                Videos
              </Link>
              <Link
                to="/mediakits"
                className={`${active.includes('/mediakits') && 'active'}`}
              >
                Media Kit
              </Link>
            </div>
          )}
        </li>
      </ul>
      <div className="copyright">
        <span>© Sun Mobility 2020</span>
      </div>
    </div>
  );
};

export default Sidebar;
