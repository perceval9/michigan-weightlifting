import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; 

const athletesData = [
  {
    standing: "Graduate",
    athletes: [
      { name: "Ahmad Almansoor", major: "Educational Studies", weightClass: "Unknown" },
      { name: "Clay Conley", major: "Ethnomusicology ", weightClass: "Unknown" }
    ]
  },
  {
    standing: "Senior",
    athletes: [
      { name: "Austin Wahle", major: "Computer Science", weightClass: "Unknown" }
    ]
  },
  {
    standing: "Junior",
    athletes: [
      { name: "Dustin Kooyer", major: "Mechanical Engineering", weightClass: "Unknown" },
      { name: "Ishwar Surendran", major: "Public Policy", weightClass: "Unknown" }
    ]
  },
  {
    standing: "Sophomore",
    athletes: [
      { name: "James Goff", major: "Political Science", weightClass: "Unknown" },
      { name: "Leon Wang", major: "Data Science", weightClass: "Unknown" },
      { name: "Tri Le", major: "Applied Exercise Science", weightClass: "Unknown" },
      { name: "Rachel Gordon", major: "Organizational Studies", weightClass: "Unknown" }
    ]
  },
  {
    standing: "Freshman",
    athletes: [
      { name: "Ivy Mcdonald", major: "Undecided", weightClass: "Unknown" },
      { name: "Kaitlyn Gastineau", major: "Political Science, Psychology", weightClass: "Unknown" },
      { name: "Karla Ramón", major: "Movement Science", weightClass: "Unknown" },
      { name: "Louisa Lynn", major: "Psychology, Sports Management", weightClass: "Unknown" },
      { name: "Perceval Park", major: "Computer Engineering, Business Administration", weightClass: "M 81kg" }
    ]
  }
];

const Athlete = ({ name, major, weightClass }) => (
  <div className="athlete-card">
    <img src="person-icon-temp.png" alt={`${name}`} />
    <div className="athlete-info">
      <h2>{name}</h2>
      <p>{major}</p>
      <p>{weightClass}</p>
    </div>
  </div>
);

Athlete.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  weightClass: PropTypes.string.isRequired,
};

const AthleteGroup = ({ standing, athletes }) => (
  <div>
    <h3 className="standing">{standing}</h3>
    <div className="athlete-group">
      {athletes.map((athlete, index) => (
        <Athlete key={index} name={athlete.name} major={athlete.major} weightClass={athlete.weightClass} />
      ))}
    </div>
  </div>
);

AthleteGroup.propTypes = {
  standing: PropTypes.string.isRequired,
  athletes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    weightClass: PropTypes.string.isRequired,
  })).isRequired,
};

const Roster = () => (
  <div className="container fade-in delay-1">
    <h2 className="sub-header fade-in delay-2">Roster</h2>
    {athletesData.map((group, index) => (
      <AthleteGroup key={index} standing={group.standing} athletes={group.athletes} />
    ))}
  </div>
);

export default Roster;