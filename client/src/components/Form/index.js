import React from "react";
import "../Form/style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" id="reviewForm">
      <input className="form-control" {...props} style={{width: 800}} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group" id="reviewText">
      <textarea className="form-control" rows="20" {...props} style={{width: 800, height: 300}} />
    </div>
  );
}

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
