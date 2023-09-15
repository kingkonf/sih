import React from 'react';
import"./aboutus.css";

import img1 from "../../imgs/img1.jpeg";
import img2 from "../../imgs/img2.jpeg";
import img3 from "../../imgs/img3.jpeg";
import img4 from "../../imgs/img4.jpeg";
import img5 from"../../imgs/img5.jpeg";

const AboutUs = () => {
  return (
    <>
      <body>
    <header>
        <h1>About Us</h1>
    </header>
    <section class="about">
        <div class="container">
            <div class="about-text">
                <h2>Our Story</h2>
                <p>We are a team of 6 people from cse 2021 batch here we tell about out project whose name is .</p>
                <p>Air quality and water quality indexing in this we tell that if pollutants is so much high then import PropTypes .</p>
                <p> from 'prop-types's bad for us otherwise it was good for us</p>
            </div>
           
        </div>
    </section>
    <section class="team">
            <h2>Our Team</h2>
        <div class="container">
            <div class="team-member">
                <img src={img1} alt="Team Member 1"/>
                <h3>Samaksh Gupta</h3>
                <p>CEO</p>
            </div>
            <div class="team-member">
                <img src={img4} alt="Team Member 2"/>
                <h3>Srijan Ramnani</h3>
                <p>Designer</p>
            </div>
            <div className="team-member">
                <img src={img2} alt="Team Member 3"/>
                <h3>Vineet jindal</h3>
                <p>React Developer</p>
            </div>
        </div>
        <div class="container">
            <div class="team-member">
                <img src={img5} alt="Team Member 1"/>
                <h3>Runishka Rao</h3>
                <p>CEO</p>
            </div>

            <div class="team-member">
                <img src={img2} alt="Team Member 2"/>
                <h3>Srijan Ramnani</h3>
                <p>Designer</p>
            </div>
            <div className="team-member">
                <img src={img3} alt="Team Member 3"/>
                <h3>Ritik data</h3>
                <p>React Developer</p>
            </div>
        </div>
    </section>
    <footer>
        <p>&copy; 2023 Company Name</p>
    </footer>
</body>
    </>
  );
};

export default AboutUs;
