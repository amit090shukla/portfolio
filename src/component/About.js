import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faMedium,
  faBehanceSquare,
  faReact,
  faCss3,
  faHtml5,
  faVuejs,
  faJs,
  faGit
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";
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
          <h4>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ marginRight: "10px" }}
            />
            <span>
              <a href="#">LinkedIn</a>
            </span>
          </h4>
        </div>
        <div className="contactLinks">
          <h4>
            <FontAwesomeIcon
              icon={faBehanceSquare}
              style={{ marginRight: "10px" }}
            />
            <span>
              <a href="#">Behance</a>
            </span>
          </h4>
        </div>
        <div className="contactLinks">
          <h4>
            <FontAwesomeIcon icon={faMedium} style={{ marginRight: "10px" }} />
            <span>
              <a href="#">Medium</a>
            </span>
          </h4>
        </div>
        <div className="contactLinks">
          <h4>
            <FontAwesomeIcon icon={faMedium} style={{ marginRight: "10px" }} />
            <span>
              <a href="#">Email</a>
            </span>
          </h4>
        </div>
        <div className="contactLinks">
          <h4>
            <FontAwesomeIcon icon={faFile} style={{ marginRight: "10px" }} />
            <span>
              <a href="#">Resume</a>
            </span>
          </h4>
        </div>
        <div className="contactLinks">
          <h4>
            <FontAwesomeIcon icon={faYoutube} style={{ marginRight: "10px" }} />
            <span>
              <a href="#">YouTube</a>
            </span>
          </h4>
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
          Hi! I am Amit Shukla. I enjoy working on the edge of design and
          technology. I believe in delivering a memorable user experience and
          seek for the task which can fulfill my creative as well as programming
          skills to full extent. Apart from this, I am technology enthusiast and
          very keen viewer of all the things happening in the tech world. I also
          love making YouTube videos on design and technology in my free time
          which has gathered over a million views. I have thorough understanding
          of data structures and algorithms which increase my problem solving
          skills and give me required skills to make my creative ideas a
          reality.
        </div>
        <div className="myImg">
          <img
            src="https://miro.medium.com/fit/c/240/240/1*483G-pa8XXwzwd8R4ZLbDw.png"
            alt=""
          />
        </div>
      </div>
      <div className="aboutTxtBox">
        <br />
        <strong>
          <h2 style={{ marginTop: "20px" }}>Skills</h2>
        </strong>
      </div>
      <div>
        <h3 style={{ marginTop: "20px" }}>Developer</h3>
        <p>
          <b>Frontend</b>:{" "}
          <span>
            <FontAwesomeIcon icon={faHtml5} style={{ marginRight: "10px" }} />
            HTML
          </span>
          ,{" "}
          <span>
            <FontAwesomeIcon icon={faCss3} style={{ marginRight: "10px" }} />
            CSS
          </span>
          ,{" "}
          <span>
            <FontAwesomeIcon icon={faJs} style={{ marginRight: "10px" }} />
            Javscript
          </span>
          ,{" "}
          <span>
            <FontAwesomeIcon icon={faReact} style={{ marginRight: "10px" }} />
            React,
          </span>
          <span>
            <FontAwesomeIcon icon={faVuejs} style={{ marginRight: "10px" }} />
            VueJS
          </span>
          <br />
        </p>
        <h3 style={{ marginTop: "20px" }}>Designer</h3>
        <p>
          <b>Digital graphics</b>: SketchApp, Adobe XD
          <br />
          <b>Wireframing &amp; Ideation</b>: Hand sketch, Balsamiq
          <br />
          <b>Prototyping</b>:Invision, Marvel
          <br />
        </p>
      </div>
    </article>
  );
};
export default About;
