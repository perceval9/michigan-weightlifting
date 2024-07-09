import React from "react"
import Roster from "./Roster"

export default function OurAthletes() {

    return (
        <div id="ourAthletesSection" className="fade-in delay-1">
            
        <h3 className="athletes sub-header">Our Athletes</h3>
        <p className="athletes-info">
  The Michigan Weightlifting team is a diverse 
  group of dedicated athletes from various academic 
  backgrounds. This diversity brings a wide range of perspectives and skills to the team, fostering a rich and inclusive environment. Our athletes come from many different schools within the University of Michigan, each contributing their unique strengths to the team's collective success. Members of our team hail from the School of Education, the School of Music, Theatre & Dance, the College of Literature, Science, and the Arts (LSA), the College of Engineering, the Gerald R. Ford School of Public Policy, the School of Public Health, the School of Kinesiology, and the Stephen M. Ross School of Business.
        </p>
        <Roster />
      </div>
    )
}

