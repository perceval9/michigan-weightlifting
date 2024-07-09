import React from 'react';
import '../App.css';

function Connect() {
  return (
    <div className = "fade-in">
      <main>
        <div id="form">
          <form action="" method="post">
            <h2>Interested in Michigan Weightlifting?</h2>
            <div className="interested-text">
              <h3>
                All inquiries from recruits with official Olympic Weightlifting experience should direct email to recruitment chair Austin Wahle: wahle@umich.edu
              </h3>
              <p>
                Weightlifting at Michigan is a great opportunity to extend a competitive athletic career beyond high school. Every semester, 15-30 students try out for Michigan Weightlifting, most of whom have no prior weightlifting experience. Athletes who excel in endurance or team sports in high school can easily transfer their athleticism to weightlifting.
              </p>
            </div>
            <div className="grid-container">
              <div className="form-group">
                <label htmlFor="name">*Name:</label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">*Email:</label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="year">Year:</label>
                <select name="year" id="year">
                  <option value="--">-- Select One --</option>
                  <option value="g">High School</option>
                  <option value="f">Freshman</option>
                  <option value="so">Sophomore</option>
                  <option value="j">Junior</option>
                  <option value="s">Senior</option>
                  <option value="g">Graduate Student</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exp">Experience:</label>
                <select name="Experience" id="exp">
                  <option value="--">-- Select One --</option>
                  <option value="Yes">Yes, I have Olympic Weightlifting experience.</option>
                  <option value="No">No, I do not have Olympic Weightlifting experience.</option>
                </select>
              </div>
              <div className="form-group" id="additional">
                <label htmlFor="exp" placeholder="65251">Anything to Share?</label>
                <textarea></textarea>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>

    </div>
  );
}

export default Connect;