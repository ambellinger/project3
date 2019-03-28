import React from "react";
import "./style.css";

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
<select class="custom-select">
          <option selected> Search by region </option>

          {props.neighborhood.map(neighborhood => (
            <option value={props.search} key={neighborhood}>{neighborhood}</option> 
          ))}
        </select>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
  );
}

export default SearchForm;
