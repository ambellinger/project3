import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"



class Main extends Component{


render(){
    return(
<div>
    <Nav/>
    <Jumbotron/>
<h1> hello I am the main page</h1>
</div>
    )
}

}
export default Main;