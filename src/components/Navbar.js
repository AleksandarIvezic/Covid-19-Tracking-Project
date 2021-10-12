import React from 'react';
import { useHistory } from 'react-router';

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="d-flex justify-content-between">
      <button type="button" onClick={history.goBack}>&lt;</button>
      <span>AirPollution</span>
      <div>
        <i className="fas fa-microphone" />
        <i className="fas fa-cog" />
      </div>
    </nav>
  );
};

export default Navbar;
