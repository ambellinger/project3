import React, { Component } from 'react'
import axios from 'axios'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./signup.css";


// import request from 'request'
import API from '../utils/API'

class Signup extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            signedUp: false,
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })



    }
    loadBuilding() {
        API.checkUser({
            username: this.state.username
        })
            .then(res => {

                console.log("data:" + res.data + " state username:" + this.state.username);

            })
            .catch(err => console.log(err));



    }
    handleSubmit(event) {

        event.preventDefault()




        //request to server to add a new username/password

        axios
            .post('//localhost:3001/user/', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    alert("You're signed up!")
                    this.setState({
                        //redirect to login page
                        redirectTo: '/login'
                    })
                } else {
                    console.log('username already taken')
                }
            })
            .catch(error => {
                console.log('signup error: ')
                console.log(error)
            })

        if (this.state.username && this.state.password) {






            API.checkUser({ username: this.state.username })
                .then(response => {
                    console.log("info: " + response.data);
                    if (!response.data) {
                        API.saveUser({
                            username: this.state.username,
                            password: this.state.password
                        })
                            .then(res => this.loadBuilding())
                            .catch(err => console.log(err));
                        window.location.href = "/";


                    }


                })
                .catch(err => console.log(err));



        }





    }

    render() {
        return (
            <div className="SignupForm">
                <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                <h4 id="signupTitle">Sign up</h4>
                <div id="mainSignupForm">

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
                            <button className="btn btn-primary col-1 col-mr-auto" id="buttonSignup" onClick={this.handleSubmit} type="submit">
                                Sign up
                        </button>
                        </div>
                    </form>
                </div>
            </div>

        )
    }
}

export default Signup