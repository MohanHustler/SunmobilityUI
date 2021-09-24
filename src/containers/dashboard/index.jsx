import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CountUp from 'react-countup';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import Loader from '..//../components/loader';
import { getDashboard } from './dashboard-action';

import './dashboard.css';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getDashboard(dispatch);
  }, [dispatch]);

  const { dashboardList, isLoading } = useSelector(
    (state) => state.getDashboard
  );

  const getResourceUrl = (resourceName) => {
    switch (resourceName) {
      case 'News':
        return '/news';
      case 'Networks':
        return '/networks';
      case 'Milestones':
        return '/milestones';
      case 'Partnership':
        return '/partnership';
      case 'Coverages':
        return '/coverages';
      case 'Image Galleries':
        return '/imagegalleries';
      case 'Videos':
        return '/videos';
      case 'Mediakits':
        return '/mediakits';
      default:
        return '/';
    }
  };

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-wrapper">
        <Sidebar />
        <div className="dashboard-container">
          {!isLoading ? (
            <div className="dashboard-inner-container">
              <h4 style={{ textAlign: 'center' }}>
                Welcome To Sun Mobility Admin Portal
              </h4>
              <div className="container pt-5">
                <div className="row">
                  {dashboardList &&
                    dashboardList.map((el, index) => (
                      <div className="c-dashboardInfo col-md-4" key={index}>
                        <Link to={getResourceUrl(el.title)}>
                          <div className="wrap">
                            <h4 className="c-dashboardInfo__title">
                              {el.title}
                            </h4>
                            <span className="c-dashboardInfo__count">
                              <CountUp end={el.count} />
                            </span>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
