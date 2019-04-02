import React, { Component } from 'react';
import Footer from "../Footer"
import "../Saved/style.css"


class Saved extends Component {
  render() {
    return (

      <div className ="card">

        <h2 class="buildingName"><a href={this.props.link}>{this.props.name}</a></h2>
        <h3 class="architectName">{this.props.architect}</h3>
        <h6>{this.props.year}</h6>
        <h6>{this.props.address}</h6>
        <h6>{this.props.addressFromHood}</h6>
   
       
        
        
        <div id="description">

          <img src={this.props.image} alt="book_image" /><p>{this.props.description}</p>
          {/* <button booknum={this.props.booknum} onClick ={this.props.clickHandler} type="button"className="btn btn-dark">Remove From Course Adoptions</button> */}

        </div>
      </div>
    );
  }
}

export default Saved;