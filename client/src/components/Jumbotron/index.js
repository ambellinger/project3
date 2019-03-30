import React from "react";
import "../Jumbotron/style.css";


function Jumbotron({ children }) {
  return (
    <div
    style={{ color: "white",height: 500, clear: "both", paddingTop: 0, opacity: .9, textAlign: "center", backgroundImage: "url(/images/headerphoto1.jpg)"}}
      className="jumbotron"
    >

    <h2>EXPLORE CHICAGO</h2>
    <h1>architecture</h1>
    {/* <button className="neighborhoodSearchButton">search neighborhoods</button> */}
    <div class="dropdown">
  <button class="neighborhoodSearchButton">search neighborhoods</button>
  <div class="dropdown-content">
    <a href="#">neighborhood 1</a>
    <a href="#">neighborhood 2</a>
    <a href="#">neighborhood 3</a>
  </div>
</div>
      {children}
    </div>
  );
}

export default Jumbotron;
