import React from "react";
import "../Form/style.css";



export function StarRatingComponent(props) {
    return (
      <div {...props}>
  
      </div>
    )
  }
  
  export function FormBtn(props) {
    return (
      <button {...props} style={{ float: "right", marginBottom: 100 }} className="btn btn-success">
        {props.children}
      </button>
    );
  }