import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const alumniData = [
  {
    standing: "Class of 2024",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2023",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2022",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2021",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2020",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2019",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2018",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  },
  {
    standing: "Class of 2017",
    alumni: [
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
      { name: "John Doe", major: "Unknown", weightClass: "Unknown" },
    ]
  }
];

const Alumni = ({ name, major, weightClass }) => (
  <div className="athlete-card">
    <img src="person-icon-temp.png" alt={`${name}`} />
    <div className="athlete-info">
      <h2>{name}</h2>
      <p>{major}</p>
      <p>{weightClass}</p>
    </div>
  </div>
);

Alumni.propTypes = {
  name: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  weightClass: PropTypes.string.isRequired,
};

const AlumniGroup = ({ standing, alumni }) => (
  <div>
    <h3 className="standing">{standing}</h3>
    <div className="athlete-group">
      {alumni.map((alumnus, index) => (
        <Alumni key={index} name={alumnus.name} major={alumnus.major} weightClass={alumnus.weightClass} />
      ))}
    </div>
  </div>
);

AlumniGroup.propTypes = {
  standing: PropTypes.string.isRequired,
  alumni: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      major: PropTypes.string.isRequired,
      weightClass: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const AlumniRoster = () => (
  <div className="container fade-in delay-1">
    <h2 className="sub-header fade-in delay-2">Alumni</h2>
    {alumniData.map((group, index) => (
      <AlumniGroup key={index} standing={group.standing} alumni={group.alumni} />
    ))}
  </div>
);

export default function OurAlumni() {
  return (
    <div id="ourAlumniSection" className="fade-in delay-1">
      <h3 className="athletes sub-header">Our Alumni</h3>
      <p className="athletes-info">
        The Michigan Weightlifting alumni are a testament to the strength and dedication that define our team. Our alumni have graduated from various prestigious programs at the University of Michigan, bringing with them the values of hard work, resilience, and teamwork into their professional lives. We take pride in our alumni who continue to inspire and contribute to the weightlifting community and beyond.
      </p>
      <AlumniRoster />
    </div>
  );
}