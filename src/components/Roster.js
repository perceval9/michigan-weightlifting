import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; 

const athletesData = [
  {
    standing: "Graduate",
    athletes: [
      { name: "Ahmad Almansoor", major: "Educational Studies" },
      { name: "Clay Conley", major: "Ethnomusicology PhD" }
    ]
  },
  {
    standing: "Senior",
    athletes: [
      { name: "Austin Wahle", major: "Computer Science" }
    ]
  },
  {
    standing: "Junior",
    athletes: [
      { name: "Dustin Kooyer", major: "Mechanical Engineering" },
      { name: "Ishwar Surendran", major: "Public Policy" }
    ]
  },
  {
    standing: "Sophomore",
    athletes: [
      { name: "James Goff", major: "Political Science" },
      { name: "Leon Wang", major: "Data Science" },
      { name: "Tri Le", major: "Applied Exercise Science" },
      { name: "Rachel Gordon", major: "Organizational Studies" }
    ]
  },
  {
    standing: "Freshman",
    athletes: [
      { name: "Ivy Mcdonald", major: "Undecided" },
      { name: "Kaitlyn Gastineau", major: "Political Science and Psychology" },
      { name: "Karla Ramón", major: "Movement Science" },
      { name: "Louisa Lynn", major: "Psychology or Sports Management" },
      { name: "Perceval Park", major: "Computer Engineering, Business Administration" }
    ]
  }
];

const Athlete = ({ name, major }) => (
  <div className="athlete-grid">
    <img src="person-icon-temp.png" alt="person icon" />
    <div className="athlete-info">
      <h2>{name}</h2>
      <h3>Major: {major}</h3>
      <h3>Athlete Weight Class</h3>
    </div>
  </div>
);

Athlete.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
};

const AthleteGroup = ({ standing, athletes }) => (
  <div>
    <h3 className="standing">{standing}</h3>
    <div className="bluebox">
      <div className="athlete-container">
        {athletes.map((athlete, index) => (
          <Athlete key={index} name={athlete.name} major={athlete.major} />
        ))}
      </div>
    </div>
  </div>
);

AthleteGroup.propTypes = {
  standing: PropTypes.string.isRequired,
  athletes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired
  })).isRequired,
};

const Roster = () => (
  <div className = "container fade-in delay-1">
    <h2 className="sub-header fade-in delay-2">Roster</h2>
    {athletesData.map((group, index) => (
      <AthleteGroup key={index} standing={group.standing} athletes={group.athletes} />
    ))}
  </div>
);

export default Roster;