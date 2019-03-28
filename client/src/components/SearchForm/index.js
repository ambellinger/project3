import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="neighborhood">Search By Region:</label>
        <input
          value={props.search}
          // onChange={props.handleInputChange}
          name="neighborhood"
          list="neighborhood"
          type="text"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="neighborhood"
        />
<select class="custom-select">
          {props.neighborhood.map(neighborhood => (
            <option value={neighborhood} key={neighborhood} />
          ))}
        </select>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
