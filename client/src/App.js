import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Main from "./pages/Main"
import New from "./pages/New"
import Search from './pages/Search'
import axios from 'axios'
import Signup from './components/sign-up'
import LoginForm from './components/login-form'


class App extends Component{
  constructor() {
    super()
    this.state = {
        username: null,
        loggedIn: false
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
}
componentDidMount() {
  this.getUser()
}
updateUser(userObject) {
  this.setState(userObject)
}

getUser() {
  axios
      .get('//localhost:3001/user')
      .then(response => {
          console.log('Get user response: ')
          console.log(response.data)
          if (response.data.user) {
              console.log('Get User: There is a user saved in the server session: ')

              this.setState({
                  loggedIn: true,
                  username: response.data.user.username
              })
          } else {
              console.log('Get user: no user')
              this.setState({
                  loggedIn: false,
                  username: null
              })
          }
      })
      .catch(error => console.log(error))
}
render(){
return (
<div>
<Router>

<Switch>
<Route exact path="/" render={() => <Main loggedIn={this.state.loggedIn}/>} />
<Route exact path="/new"component ={New}/>


 
                {/* Routes to different components */}
                <Route exact path="/" component={Main} />
                <Route path="/login" render={() => <LoginForm updateUser={this.updateUser} />} />
                <Route path="/signup" render={() => <Signup />} />
                <Route path="/search" render={() => <Search />} />


</Switch>
{this.state.loggedIn && <p>Welcome, {this.state.username}!</p>}






  </Router>
  </div>
)
}
}


export default App;
