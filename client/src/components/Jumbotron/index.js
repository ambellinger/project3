import React from "react";
import "../Jumbotron/style.css";
import Searched from "../Searched"



function Jumbotron(props) {
  return (
    <div
      style={{ color: "white", height: 500, clear: "both", paddingTop: 0 }}
      className="jumbotron"
    >

      <h2 id="arch">archfindr</h2>
      <h1 id="discover">Discover Chicago</h1>


    </div>
  );
}

export default Jumbotron;
