import React from "react";
import "../Jumbotron/style.css";
import Searched from "../Searched"



function Jumbotron(props) {
  return (
    <div
      style={{ color: "white", height: 500, clear: "both", paddingTop: 0, opacity: .9, textAlign: "center", backgroundImage: "url(/images/headerphoto1.jpg)" }}
      className="jumbotron"
    >

      <h2 id="explore">EXPLORE CHICAGO</h2>
      <h1 id="architecture">architecture</h1>


    </div>
  );
}

export default Jumbotron;
