import React from "react";
import "../Jumbotron/style.css";
import Saved from "../Saved"



function Jumbotron(props) {
  return (
    <div
    style={{ color: "white",height: 500, clear: "both", paddingTop: 0, opacity: .9, textAlign: "center", backgroundImage: "url(/images/headerphoto1.jpg)"}}
      className="jumbotron"
    >

    <h2 id="explore">EXPLORE CHICAGO</h2>
    <h1 id="architecture">architecture</h1>
    
      {/* <input
          value={props.search}
          // onChange={props.handleInputChange}
          name="neighborhood"
          list="neighborhood"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="neighborhood"
        /> */}
      {/* <form onSubmit={props.handleFormSubmit}>
        <select className="custom-select" value={props.search} onChange={props.handleInputChange}>

          <option selected> Search by region </option>
          {props.neighborhood.map(neighborhood => (
            <option value={neighborhood} key={neighborhood}>{neighborhood}</option>
          ))}
        </select>
        <input type="submit" value="Submit" /> */}
       {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>  */}
      {/* </form>  */}
    </div>
  );
}

export default Jumbotron;
