import React, { useState } from 'react';
import About from './About';
import AthletesAlumni from './AthletesAlumni';
import Sponsors from './Sponsors';
import edwinPic from '../assets/edwin-pic.png';
import ivyPic from '../assets/ivy-pic.png';
import maxImg from '../assets/max-img.png';
import karlaPic from '../assets/karla-pic.png';
import triPic from '../assets/tri-pic.jpg';

function Main() {
  const [fontSize, setFontSize] = useState('1em');

  const handleMouseOver = () => {
    setFontSize('1.3em');
  };

  const handleMouseOut = () => {
    setFontSize('1em');
  };

  return (
    <main className="fade-in delay-1">
      <div id="pics" className="fade-in delay-1">
        <img id="img1" src={edwinPic} alt="person icon" className="translucent fade-in delay-1" />
        <img id="img2" src={ivyPic} alt="ivy icon" className=" translucent fade-in delay-1" />
        <img id="img3" src={maxImg} alt="max icon" className=" translucent fade-in delay-1" />
        <img id="img4" src={karlaPic} alt="karla icon" className="translucent fade-in delay-1" />
        <img id="img5" src={triPic} alt="tri icon" className="translucent fade-in delay-1" />
      </div>
      <div
        id="bigarea"
        className="fade-in delay-2"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h4 id="weare">
          We are <span id="mw" style={{ fontSize }}>Michigan Weightlifting</span>.
        </h4>
      </div>
      <div className="fade-in delay-3">
        <About />
      </div>
      <div className="fade-in delay-4">
        <AthletesAlumni />
      </div>
      <div className="fade-in delay-5">
        <Sponsors />
      </div>
    </main>
  );
}

export default Main;