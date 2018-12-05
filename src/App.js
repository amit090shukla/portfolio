import React, { Component } from "react";
import "./css/App.css";
import Head from "../src/component/Header";
import Section from "../src/component/Section";
class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Section />
      </div>
    );
  }
}

export default App;
