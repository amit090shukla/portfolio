import React from "react";
import Project from "./Project";
import "../css/head.css";
class ProjectContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.projects.map((val, ind) => {
          return <Project name={val.name} url={val.url} key={ind} />;
        })}
      </div>
    );
  }
}

export default ProjectContainer;
