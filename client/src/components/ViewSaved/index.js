import React, { Component } from 'react';
import "../Searched/style.css"


class ViewSaved extends Component {
  render() {
    return (

      <div className ="card">
 
        <h2 class="buildingName"><a href={this.props.link}>{this.props.name}</a></h2>
        <h3 class="architectName">{this.props.architect}</h3>
        <h6>{this.props.year}</h6>
        <div id="description">

          <img src={this.props.image} alt="building_image" /><p>{this.props.description}</p>
          <button bldgnum={this.props.identification}  type="button"className="btn btn-dark">Add to my Sites</button>

        </div>
      </div>
    );
  }
}

export default ViewSaved;