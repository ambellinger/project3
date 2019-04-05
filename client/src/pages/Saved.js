import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron"
import Nav from "../components/Nav"
import ViewSaved from "../components/ViewSaved"
import { StarRatingComponent, FormBtn} from "../components/Star";

class Saved extends Component {
  state = {
    search: "",
    neighborhood: [],
    results: [],
    entries: [],
    entriesIntoBuildingDB: [],
    entriesIntoBuildingDBResponse: [],
     getThemBuildings: [],
     redirectTo: null,
    error: ""
  };


  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
     let userid = sessionStorage.getItem("userid");
    if (!userid) {
      alert("To view your building itinerary, you must be logged in.")
     window.location.href = "/login"
    } else {
    
    API.getUserWithBuildingId(userid)
      .then(res => this.setState({ results: res.data },
        console.log(res.data, "Api. get user with building id"),
   
        //this places the ids of the user's saved buildings into the state called entries.
        this.setState({ entries: res.data[0].entries}),
        console.log("this.state.entries" + this.state.entries),
        console.log(this.state.entries[0]),
       
        //Map through entries and then plug the results into the function that retrieves the building's info
        this.state.entries.map(results => 
          this.getSavedBuildingsFromUserID(results))

      ))
      .catch(err => console.log(err));
        } 
  }

  getSavedBuildingsFromUserID = buildingid => {
    
    console.log("getSavedBuildingsFromUserIDFucntion" + buildingid)
    API.getAllSavedBuilding(buildingid)
    .then(res => this.setState({entriesIntoBuildingDBResponse: res.data},
      console.log(res.data, "this is the results of the API get all saved buildings, aka, second method"),
      this.state.getThemBuildings.push(res.data),
      console.log(this.state.getThemBuildings, "get them buildings, testing")
      )
      )
        .catch(err => console.log(err));
  };



  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("I am grabbing value of dropdown list" + event.target.value)
    this.setState({ search: event.target.value });
    API.getHood(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        } console.log("I am the state of the search" + this.state.search)
        //the res.data below is the data 
        this.setState({ results: res.data, error: "" }, console.log("this is the data that you need", res.data));
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleUpdate = buildingid => {

    console.log(buildingid, "buildingid")
    API.update({ _id: buildingid }, sessionStorage.getItem("userid"))
      .catch(err => console.log(err));
  }
  render() {
    
    return (
      <div>
       
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

        <Jumbotron />


        <div>
       
          {this.state.getThemBuildings.map(results => (



            <ViewSaved
           
              identification={results._id}
            
              name={results.name}
              architect={results.architect}
              rating={results.rating}
              description={results.description}
              image={results.image}
              year={results.year}
              saved={results.saved}
              
              />

          
              


          ))}

              
        </div>

      </div>
    )
  }



}


export default Saved;
