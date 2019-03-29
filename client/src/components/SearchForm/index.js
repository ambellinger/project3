import React from "react";
import "./style.css";
import Saved from "../Saved"

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="form-group">
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
      <form onSubmit={props.handleFormSubmit}>
        <select className="custom-select" value={props.search} onChange={props.handleInputChange}>

          <option selected> Search by region </option>
          {props.neighborhood.map(neighborhood => (
            <option value={neighborhood} key={neighborhood}>{neighborhood}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
<Saved/>
       {/* <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>  */}
      </form> 
    </div>
  );
}

export default SearchForm;
