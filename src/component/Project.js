import React from "react";
import "../css/head.css";
const Project = () => {
  return (
    <a
      href="https://uxplanet.org/attempting-to-make-an-app-for-depressed-people-and-failing-cbad3ea9263"
      target="__blank"
      id="project-link"
    >
      <div className="project">
        <div className="projectImage">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="aboutProject">
          <h2 style={{ margin: 0 }}>FoodMa</h2>
          <p>
            FoodMa is an idea trying to connect hungry youth to the mothers and
            housewives who are willing to prvide food for money
          </p>
        </div>
      </div>
    </a>
  );
};
export default Project;
