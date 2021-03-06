import React from "react";
import ProjectContainer from "./ProjectContainer";
import "../css/head.css";

const Section = props => {
  return (
    <article>
      <ProjectContainer projects={props.projectData} />
    </article>
  );
};
export default Section;
