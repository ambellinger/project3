import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Jumbotron from "../components/Jumbotron"
import Nav from "../components/Nav"

// import SearchResults from "../components/SearchResults";
import Saved from "../components/Saved"
class Search extends Component {
  state = {
    search: "",
    neighborhood: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log('I was triggered during componentDidMount')
    API.getList() 
      .then(res => this.setState({ neighborhood: res.data },
        console.log(res.data, " this is res data")
    ))
      .catch(err => console.log(err));
  }

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
        this.setState({ results: res.data, error: "" }, console.log( "this is the data that you need" , res.data));
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
      <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

        <Jumbotron/>
        
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            neighborhood={this.state.neighborhood}
            search={this.state.search}
          />
         
            <div>
              {this.state.results.map(results =>(

            <Saved
            identification={results._id}
            name={results.name}
            architect={results.architect}
            rating={results.rating}
            description={results.description}
            image={results.image}
            year={results.year}
            clickHandler={this.deleteBook}
            />
              


          ))}
</div>            

         </div> 
        )}
     
    
    
    }

      
export default Search;
