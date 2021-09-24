import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import User from '../../utils/user';
import logo from '../../assets/images/logo.png';
import arrow from '../../assets/images/arrow-right.png';

const Header = () => {
  return (
    <div>
      <div className="header">
        <Navbar expand="lg">
          <div className="header-section">
            <Link to="/" className="header-logo">
              <Navbar.Brand>
                <img src={logo} alt="logo" />
              </Navbar.Brand>
            </Link>
            <div className="header-profile">
              <Link
                to="/"
                className={`header-nav ${
                  window.location.pathname === '/' && 'active'
                }`}
              >
                Dashboard
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Dropdown>
                  <Dropdown.Toggle>
                    <div>
                      Admin
                      <span className="arrow">
                        <img src={arrow} alt="text"></img>
                      </span>
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={new User().forceLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
