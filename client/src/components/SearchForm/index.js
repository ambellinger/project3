import React from "react";
import "./style.css";
// import Saved from "../Saved"
import "../SearchForm/style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="form-group" id="searchForBuildings">

      <form onSubmit={props.handleFormSubmit}>
        <select className="custom-select" value={props.search} onChange={props.handleInputChange}>

          <option selected> Search by region </option>
          {props.neighborhood.map(neighborhood => (
            <option value={neighborhood} key={neighborhood}>{neighborhood}</option>
          ))}
        </select>
        <input type="submit" value="Search" id="buildingSearchButton" />

      </form>
    </div>
  );
}

export default SearchForm;
