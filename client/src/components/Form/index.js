import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}
export function SelectList(props){
  return(
<div className="form-group">
<label for="sel1">Select list:</label>
  <select className="form-control" id="neighborhoods">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    </select>
</div>
);
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
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
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
