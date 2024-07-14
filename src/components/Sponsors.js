import React from 'react';
import imImage from '../assets/im.jpeg';
import recSportsImage from '../assets/rec-sports.jpeg';
import adamsLogo from '../assets/adams_logo.png.webp';
import adams from '../assets/adams.webp';
import ascentbackground from '../assets/ascentbackground.jpg.webp';
import ascentlogo from '../assets/ascent-logo.jpg';
import lmnt_logo from '../assets/lmnt_logo.png';
import lmnt from '../assets/lmnt.jpg';
import lootlogo from '../assets/loot_logo.webp';
import loot from '../assets/loot.webp';
import onyx from '../assets/onyx_background.webp';
import onyx_logo from '../assets/onyx_logo.webp';
import wsclogo from '../assets/wsc-logo.webp';
import wscbackground from '../assets/wscbackground.jpg';

const sponsors = [
  {
    id: 'wolv_sc',
    imgSrc: wscbackground,
    logoSrc: wsclogo,
    name: 'Wolverine Strength and Conditioning',
    siteUrl: 'https://a2xfit.com',
  },
  {
    id: 'umich_rec',
    imgSrc: imImage,
    logoSrc: recSportsImage, // Add logoSrc if available
    name: 'UMich Rec Sports',
    siteUrl: 'https://recsports.umich.edu/', // Add siteUrl if available
  },
  {
    id: 'adams',
    imgSrc: adams,
    logoSrc: adamsLogo,
    name: 'adams sports med',
    siteUrl: 'https://adamssportsmedicine.com/',

  },
  {
    id: 'ascent',
    imgSrc: ascentbackground,
    logoSrc: ascentlogo,
    name: 'Ascent Protein',
    siteUrl: 'https://www.ascentprotein.com/',
  },
  {
    id: 'lmnt',
    imgSrc: lmnt,
    logoSrc: lmnt_logo,
    name: 'LMNT',
    siteUrl: 'https://drinklmnt.com/',
  },
  {
    id: 'loot',
    imgSrc: loot,
    logoSrc: lootlogo,
    name: 'Loot',
    siteUrl: 'https://www.lootenergy.com/',
  },
  {
    id: 'onyx',
    imgSrc: onyx,
    logoSrc: onyx_logo,
    name: 'Onyx',
    siteUrl: 'https://www.onyxstraps.com/',
  }

  // Add more sponsors as needed
];

function Sponsors() {
  return (
    <div className="sponsors-section section">
      <h2 className="sub-header fade-in delay-1">Partners & Affiliations</h2>
      <div className="sponsors-grid fade-in delay-2">
        {sponsors.map((sponsor) => (
          <div className="sponsor-container" key={sponsor.id}>
            <a href={sponsor.siteUrl} target="_blank" rel="noopener noreferrer">
              {sponsor.imgSrc && (
                <img className="sponsor-img" src={sponsor.imgSrc} alt={sponsor.name} />
              )}
              <div className="sponsor-info">
                {sponsor.logoSrc && (
                  <img className="sponsor-logo" src={sponsor.logoSrc} alt={sponsor.name} />
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;