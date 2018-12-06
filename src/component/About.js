import React from "react";
import "../css/head.css";

const About = props => {
  return (
    <article>
      <div className="aboutTxtBox">
        <br />
        <strong>
          <h2 style={{ marginTop: "20px" }}>Contact Me</h2>
        </strong>
      </div>
      <div className="d-f j-c-s-b">
        <div className="contactLinks">
          <h4>LinkedIn</h4>
        </div>
        <div className="contactLinks">
          <h4>Behance</h4>
        </div>
        <div className="contactLinks">
          <h4>Medium</h4>
        </div>
        <div className="contactLinks">
          <h4>Email</h4>
        </div>
        <div className="contactLinks">
          <h4>Resume</h4>
        </div>
        <div className="contactLinks">
          <h4>YouTube</h4>
        </div>
      </div>

      <div className="aboutTxtBox">
        <br />
        <strong>
          <h2 style={{ marginTop: "20px" }}>Amit Shukla</h2>
        </strong>
      </div>
      <div className="d-f j-c-s-b">
        <div className="abtMe">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          quam, voluptate quis in dignissimos adipisci dolorem autem sapiente
          consectetur incidunt facere ratione asperiores ea delectus magnam rem
          esse amet repellendus?
        </div>
        <div className="myImg">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
      </div>
    </article>
  );
};
export default About;
