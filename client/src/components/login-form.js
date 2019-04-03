


import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import API from "../utils/API";
import  App from "../../src/App.js";
import Main from "../pages/Main"
import "./login.css";

import  Nav from "../components/Nav";
class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            loggedIn:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.updateUser = this.updateUser.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')


        if (this.state.username && this.state.password) {
            API.getUser({
                username: this.state.username,
                password: this.state.password
            })
                .then(res => {
                 
                    console.log(" outoput:" + res.data);
                    if (res.data){

                        sessionStorage.setItem("loggedIn","true");
                        sessionStorage.setItem("userid",res.data._id);
                    //alert(res.data._id);
                        this.setState({loggedIn: true, redirectTo: "/"});
        
                       
                       
                    }
                    else{

                        alert("incorrect password");

                        this.setState({loggedIn: false, redirectTo: null });
                        sessionStorage.setItem("loggedIn","false");
                    }
                  


                })
                .catch(err => console.log(err));
        }

       
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    render() {

        //Kurt, it loggedin is successful, it will set this.state.redirectTo to '/'  and go to the homepage 
        if (this.state.redirectTo) {
            return   <Redirect exact path="/" render={() => <Main loggedIn={this.state.loggedIn}/>} /> 
        } else {
              //Kurt, if loggedin is unsuccessful, it will  this.state.redirectTo to  null and render the login page again 
            return (
                <div>
                    <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                    <div className="formSection">
                    <h4 id="loginTitle">Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="username">
                                    Username:
                                </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input
                                    className="form-input"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder=""
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-1 col-ml-auto">
                                <label className="form-label" htmlFor="password">
                                    Password:{' '}
                                </label>
                            </div>
                            <div className="col-3 col-mr-auto">
                                <input
                                    className="form-input"
                                    placeholder=""
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group ">
                            <div className="col-7" />
                            <button
                                className="btn btn-primary col-1 col-mr-auto"
                                id="buttonLogin"
                                onClick={this.handleSubmit}
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            )
        }
    }
}

export default LoginForm