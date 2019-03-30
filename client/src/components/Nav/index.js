import React, { Component } from 'react'
import "../Nav/style.css";
import { Link } from 'react-router-dom'


import axios from 'axios'

class Nav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.state ={

        }
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('//localhost:3001/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

      updateUser(userObject) {
        this.setState(userObject)
    }

render(){
  const loggedIn = this.props.loggedIn;
  return (

    <nav className="navbar">
      <a className="nav-item" href="/saved">saved buildings</a>
      <div>
      {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                <span className="text-secondary">logout</span></Link>

                            </section>
                        ) : (
                                <section className="navbar-section">
                                    <Link to="/" className="btn btn-link text-secondary">
                                        <span className="text-secondary">home</span>
                                        </Link>
                                    <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">login</span>
				</Link>
                                    <Link to="/signup" className="btn btn-link">
                                    <span className="text-secondary">sign up</span>
				</Link>
                                </section>
                            )}
      </div>
    </nav>
   
  )
}

}
export default Nav;
