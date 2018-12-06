import React, { Component } from "react";
import "./css/App.css";
import Head from "../src/component/Header";
import Section from "../src/component/Section";
class App extends Component {
  state = {
    activeTab: "portfolio"
  };
  changeTab = selctedTab => {};
  render() {
    return (
      <div>
        <Head changeTab={this.changeTab} />
        <Section />
      </div>
    );
  }
}

export default App;
