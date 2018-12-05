import React from "react";
import "../css/head.css";
const Head = () => {
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
              <li className="headerNavList aboutHover" title="Portfolio">
                <a href="/" className="headerNav">
                  <b>Portfolio</b>
                </a>
              </li>
              <li className="headerNavList" title="Articles">
                <a href="/" className="headerNav">
                  <b>Articles</b>
                </a>
              </li>
              <li className="headerNavList" title="About Me">
                <a href="/" className="headerNav">
                  <b>About</b>
                </a>
              </li>
              <li className="headerNavList" title="Videos">
                <a href="/" className="headerNav">
                  <b>Videos</b>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Head;
