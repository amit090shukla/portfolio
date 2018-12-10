/* eslint-disable */
import React from "react";
import "../css/head.css";
class Head extends React.Component {
  changeTab = e => {
    this.props.changeTab(e.target.firstChild.data);
  };
  componentDidMount = () => {
    document.getElementById(this.props.active).className += " aboutHover";
  };

  componentDidUpdate = () => {
    const idList = ["portfolio", "articles", "videos", "about"];
    const newidList = idList.filter((val, key) => val !== this.props.active);
    newidList.map((val, id) => {
      document.getElementById(val).className = "headerNavList";
    });
    document.getElementById(this.props.active).className += " aboutHover";
  };

  render() {
    return (
      <header className="head">
        <div>
          <div id="headerLogo">
            <a href="/">
              <h1>Amit Shukla</h1>
            </a>
          </div>
          <div id="headerNav">
            <nav>
              <ul>
                <li className="headerNavList" title="Portfolio" id="portfolio">
                  <a href="#" className="headerNav">
                    <b onClick={this.changeTab}>Portfolio</b>
                  </a>
                </li>
                <li className="headerNavList" title="Articles" id="articles">
                  <a href="#" className="headerNav">
                    <b onClick={this.changeTab}>Articles</b>
                  </a>
                </li>
                <li className="headerNavList" title="Videos" id="videos">
                  <a href="#" className="headerNav">
                    <b onClick={this.changeTab}>Videos</b>
                  </a>
                </li>
                <li className="headerNavList" title="About Me" id="about">
                  <a href="#" className="headerNav">
                    <b onClick={this.changeTab}>About</b>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Head;
