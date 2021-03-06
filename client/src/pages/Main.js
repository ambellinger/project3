import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Searched from "../components/Searched";
import API from "../utils/API";



class Main extends Component{
  constructor(props) {
    super()
    this.state = {
        
        buildings: []
    }

    this.updateUser = this.updateUser.bind(this)
}
  
    

componentDidMount(){
  
  console.log("login:"+     sessionStorage.getItem("loggedIn"))
    this.loadBuildings()
    this.setState({loggedIn: this.state.loggedIn})
    
}

updateUser(userObject) {
  this.setState(userObject)
}

loadBuildings = () => {
  // alert(sessionStorage.getItem("userid"))
    API.getBuildings()
    .then(res => 
      this.setState({ buildings: res.data},
      console.log(res.data, " this is res data")
      ))
      .catch(err => console.log(err));
      }; 

      render() {
        console.log(this.state.buildings, 'this is statebuildings')
        return (
            <div>
          <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />

              <Jumbotron></Jumbotron>
           
    
            <div className="container">
            {this.state.buildings.length ? (
              <div>
                {this.state.buildings.map(buildings => (
    
                  <Searched
                  booknum={buildings._id}
                  name={buildings.name}
                  architect={buildings.architect}
                  rating={buildings.rating}
                  description={buildings.description}
                  image={buildings.image}
                  year={buildings.year}
                  clickHandler={this.deleteBook}
              
                  />
    
                ))}
                        
    
              </div>
    
            )
    
              : (
                <h3>No Results to Display</h3>
              )}
    
    
    
    
          </div>
          </div>
        
    
        )
      }}
    
    export default Main;