import React, { Component } from 'react'
import axios from 'axios'
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
                //  window.location.href="/";

            })
            .catch(err => console.log(err));



    }
    handleSubmit(event) {
        //    console.log('sign-up handleSubmit, username: ')
        //  console.log(this.state.username)
        event.preventDefault()




        //request to server to add a new username/password
        if (this.state.username && this.state.password) {



            // const dataObject={username: this.state.username };


            //    request
            //    .get('http://mysite.com/doodle.png')
            //    .on('error', function(err) {
            //      console.log(err)
            //    })
            //    .pipe(fs.createWriteStream('doodle.png'))


            // axios.get('/api/users/check',dataObject)
            // .then(function (response) {
            //     console.log("data:" +response );
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });

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
                <h4>Sign up</h4>
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-1 col-ml-auto">
                            <label className="form-label" htmlFor="username">
                                Username
                            </label>
                        </div>
                        <div className="col-3 col-mr-auto">
                            <input
                                className="form-input"
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
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
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="col-7" />
                        <button className="btn btn-primary col-1 col-mr-auto" onClick={this.handleSubmit} type="submit">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup
