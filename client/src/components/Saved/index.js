import React, { Component } from 'react'; 
import "../Saved/style.css"


class Saved extends Component {
  render() {
    return (
      <div class ="card">

 
 <h1><a href={this.props.link}>{this.props.name}</a></h1>
 <h2>{this.props.author}</h2>
 <div id = "description">
 
 <img src ={this.props.image} height= "300px"alt="book_image"/><p>{this.props.description}</p>
 {/* <button booknum={this.props.booknum} onClick ={this.props.clickHandler} type="button"className="btn btn-dark">Remove From Course Adoptions</button> */}

 </div>
<div>
 </div>
      </div>
    );
  }
}

export default Saved;