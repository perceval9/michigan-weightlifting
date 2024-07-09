import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/mweightliftinglong.png';

function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header>
      <Link to="/">
        <img id="logo" src={logo} alt="UMich Weightlifting Logo" />
      </Link>
      <nav>
        <div className="dropdown">
          <p><Link className="label nav-button">About</Link></p>
          <div className="dropdown-content">
            <Link className="drop-content" to="#mw">About Our Team</Link>
            <Link className="drop-content" to="#ourAlumni">Our Alumni</Link>
            <Link className="drop-content" to="#sponsors">Partners & Affiliations</Link>
          </div>
        </div>
        <p><Link className="label nav-button" to="/ourAthletes">Our Athletes</Link></p>
        <p><Link className="label nav-button" to="/connect">Connect</Link></p>
      </nav>
    </header>
  );
}

export default Header;