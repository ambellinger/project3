import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
// import API from "../utils/API";



class Main extends Component{

//     state ={
//         buildings: []
//     }

// componentDidMount(){
//     this.loadBuildings()
// }
render(){
    return(
<div>
    <Nav/>
    <Jumbotron/>
    <div class ="container">

<h1> hello I am the main page</h1>
</div>
</div>
    )
}

}
export default Main;