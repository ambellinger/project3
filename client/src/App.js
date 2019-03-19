import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main"
import New from "./pages/New"

function App(){
return (

<Router>
<div>
<Switch>
<Route exact path="/"component ={Main}/>
<Route exact path="/new"component ={New}/>



</Switch>


</div>




  </Router>
)

}


export default App;
