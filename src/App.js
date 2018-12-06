import React, { Component } from "react";
import "./css/App.css";
import Head from "../src/component/Header";
import Section from "../src/component/Section";
import Articles from "../src/component/Articles";
import About from "../src/component/About";
class App extends Component {
  state = {
    activeTab: "portfolio",
    projectData: [
      { name: "FoodMa", url: "www.facebook.com" },
      { name: "DeepRestt", url: "www.google.com" }
    ],
    articleData: [
      { name: "Instagram", url: "www.facebook.com" },
      { name: "Social Media Effects", url: "www.google.com" }
    ]
  };
  changeTab = selectedTab => {
    this.setState({
      activeTab: selectedTab.toLowerCase()
    });
  };

  renderSection = () => {
    switch (this.state.activeTab) {
      case "portfolio":
        return <Section projectData={this.state.projectData} />;
      case "articles":
        return <Articles articleData={this.state.articleData} />;
      case "videos":
        return <div>Videos</div>;
      case "about":
        return (
          <div>
            <About />
          </div>
        );
    }
  };

  render() {
    return (
      <div>
        <Head active={this.state.activeTab} changeTab={this.changeTab} />
        {this.renderSection()}
      </div>
    );
  }
}

export default App;
