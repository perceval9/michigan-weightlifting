import React from 'react';

function AthletesAlumni() {
  return (
    <div className="athletes-alumni section">
      <div id="ourAthletes">
        <h3 className="athletes">Our Athletes</h3>
        <p className="athletes-info">The Michigan Weightlifting team is a diverse group of dedicated athletes from various academic backgrounds. This diversity brings a wide range of perspectives and skills to the team, fostering a rich and inclusive environment. Our athletes come from many different schools within the University of Michigan, each contributing their unique strengths to the teams collective success.</p>
        <ul className="athletes-info list">
          <li>School of Education</li>
          <li>School of Music, Theatre & Dance</li>
          <li>College of Literature, Science, and the Arts (LSA)</li>
          <li>College of Engineering</li>
          <li>Gerald R. Ford School of Public Policy</li>
          <li>School of Public Health</li>
          <li>School of Kinesiology</li>
          <li>Stephen M. Ross School of Business</li>
        </ul>
        <button className="learn-more athletes-learn">Learn More</button>
      </div>
      <div id="ourAlumni">
        <h3>Our Alumni</h3>
        <p className="alumni-info">Michigan Weightlifting alumni have ventured into a wide array of industries, while many choose to continue competing at USAW and IWF Events. Outside of Weightlifting, their contributions span across various sectors, reflecting the diverse academic backgrounds and professional ambitions of our athletes. Here are some of the industries where our alumni are making an impact:</p>
        <ul className="alumni-info list">
          <li>Aerospace and Defense</li>
          <li>Public Health and Healthcare</li>
          <li>Technology and Software</li>
          <li>Government and Public Policy</li>
          <li>Education and Academia</li>
          <li>Environmental Studies</li>
          <li>Personal Fitness and Training</li>
        </ul>
        <button className="learn-more athletes-learn">Learn More</button>
      </div>
    </div>
  );
}

export default AthletesAlumni;