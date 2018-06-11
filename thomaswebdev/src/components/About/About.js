import React from "react";
import "./About.css";

const About = props => (
  <div className="row">
    <div className="col-lg-12">
      <p className="circleheadshot">
        <img src={`../../images/circleheadshot.png`} alt="Head Shot" id="circleheadshotimage"></img>
      </p>
    </div>
    <div className="col-lg-12">
      <p>
        Hello my name is Thomas and I am a Web Developer
      </p>
    </div>
  </div>
);

export default About;