import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./login.css";


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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

        axios
            .post('//localhost:3001/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            })
            .catch(error => {
                console.log('login error: ')
                console.log(error)
            })
    }

    updateUser(userObject) {
        this.setState(userObject)
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <div>
                    <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
                    </div>
                    <h4>Login</h4>
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
                        <div className="form-group">
                            <div className="col-7" />
                            <button id="buttonLogin"
                                className="btn btn-primary col-1 col-mr-auto"
                                onClick={this.handleSubmit}
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LoginForm