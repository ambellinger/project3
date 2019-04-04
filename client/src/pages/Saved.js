import React, { Component } from "react";
import API from "../utils/API";
//import SearchForm from "../components/SearchForm";
import Jumbotron from "../components/Jumbotron"
import Nav from "../components/Nav"
import ViewSaved from "../components/ViewSaved"


// import SearchResults from "../components/SearchResults";
// import Searched from "../components/Searched"
class Saved extends Component {
  state = {
    search: "",
    neighborhood: [],
    results: [],
    entries: [],
    entriesIntoBuildingDB: [],
    entriesIntoBuildingDBResponse: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
     let userid = sessionStorage.getItem("userid");
    API.getUserWithBuildingId(userid)
      .then(res => this.setState({ results: res.data },
        console.log(res.data, "Api. get user with building id"),
        //console.log(res.data.entries),
        //this places the ids of the user's saved buildings into the state called entries.
        this.setState({ entries: res.data[0].entries}),
        console.log("this.state.entries" + this.state.entries),
        console.log(this.state.entries[0])
      ))
      .catch(err => console.log(err));

    this.getSavedBuildingsFromUserID("5ca0009525515396ecbd4a18"); 
    // API.getAllSavedBuilding("5ca0009525515396ecbd4a18")
    //     .then(res => this.setState({entriesIntoBuildingDBResponse: res.data},
    //       console.log(res.data, "this is the results of the API get all saved buildings, aka, second method"),
    //       )
    //       )
    //         .catch(err => console.log(err));
  }

  getSavedBuildingsFromUserID = buildingid => {
    console.log("getSavedBuildingsFromUserIDFucntion" + buildingid)
    API.getAllSavedBuilding(buildingid)
    .then(res => this.setState({entriesIntoBuildingDBResponse: res.data},
      console.log(res.data, "this is the results of the API get all saved buildings, aka, second method"),
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
    //   console.log(results, "i am book data")
    // alert(id + " " + sessionStorage.getItem("userid"))\
    console.log(buildingid, "buildingid")
    API.update({ _id: buildingid }, sessionStorage.getItem("userid"))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
       
        <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

        <Jumbotron />

        {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            neighborhood={this.state.neighborhood}
            search={this.state.search}
          /> */}

        <div>
          {this.state.entries.map(results => (



            <ViewSaved
           // onLoad = {() => this.getSavedBuildingsFromUserID(results)}
              identification={results._id}
              name={results._id}
              //onLoad = {() => this.getAllSavedBuilding(results)}
              // name={results.name}
              // architect={results.architect}
              // rating={results.rating}
              // description={results.description}
              // image={results.image}
              // year={results.year}
              // saved={results.saved}
              // clickHandler={() => {
              //   this.handleUpdate(results._id)
              // }} 
              />



          ))}
        </div>

      </div>
    )
  }



}


export default Saved;
