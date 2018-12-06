import React from "react";
import "../css/head.css";
const Project = props => {
  return (
    <a href={props.url} target="__blank" id="project-link">
      <div className="project">
        <div className="projectImage">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className="aboutProject">
          <h2 style={{ margin: 0 }}>{props.name}</h2>
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
