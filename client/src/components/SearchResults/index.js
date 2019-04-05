import React from "react";
import "../SearchResults/style.css"

function SearchResults(props) {
  return (
    <div id="resultsDisplay">
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
    </div>
  );
}

export default SearchResults;
