import React from 'react';
import { useHistory, useLocation } from 'react-router';
import '../styling/Navbar.css';

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <nav className="d-flex justify-content-between p-1">
      {(location.pathname !== '/') ? <button className="back" type="button" onClick={history.goBack}><i className="fas fa-chevron-left text-light"> </i></button> : <span className="fw-bold text-uppercase">Countries</span>}
      <span className="fw-light fs-6 text-lowercase">
        Track COVID-19
        {location.pathname}
      </span>
      <div>
        <i className="fas fa-microphone mx-1" />
        <i className="fas fa-cog mx-1" />
      </div>
    </nav>
  );
};

export default Navbar;
