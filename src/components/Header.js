import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/mweightliftinglong.png';

function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false); // Close the menu when the route changes
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/">
        <img id="logo" src={logo} alt="UMich Weightlifting Logo" />
      </Link>
      <nav>
        <div className={`nav-list ${menuOpen ? 'active' : ''}`}>
          <p><Link className="label nav-button" to="/ourAthletes">Our Athletes</Link></p>
          <p><Link className="label nav-button" to="/OurAlumni">Our Alumni</Link></p>
          <p><Link className="label nav-button" to="/Sponsors">Our Partners</Link></p>
          <p><Link className="label nav-button" to="/connect">Connect</Link></p>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;