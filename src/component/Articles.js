import React from "react";
import ProjectContainer from "./ProjectContainer";
import "../css/head.css";

const Article = props => {
  return (
    <article>
      <ProjectContainer projects={props.articleData} />
    </article>
  );
};
export default Article;
