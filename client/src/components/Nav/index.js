
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
    
      //  Kurt, this reset the loggedIn to false 
        sessionStorage.setItem("loggedIn","false");
        sessionStorage.clear();
      // Kurt, this routes back to the homepage
                 window.location.href="/";


        // axios.post('/login').then(response => {
        //   console.log(response.data)
        //   if (response.status === 200) {
        //     this.props.updateUser({
        //       loggedIn: false,
        //       username: null
        //     })
        //   }
        // }).catch(error => {
        //     console.log('Logout error')
        // })
      }

      updateUser(userObject) {
        this.setState(userObject)
    }

render(){
  
  return (
    

    
    <nav className="navbar">
    <section className="navbar-section ">
    <Link to="/viewsaved" className="btn btn-link text-secondary">
           <span className="text-secondary">itinerary</span>
           </Link>
   <Link to="/new" className="btn btn-link text-secondary" >
   <span className="text-secondary">submit a building</span></Link>

</section>


      <div>

        {/* Kurt, it will look for loggedIn value that was stored in sessionStorage, if it is true, it will show logout only
        otherwise the homepage */}
      {sessionStorage.getItem("loggedIn")==="true"? (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary">
                                       <span className="text-secondary">home</span>
                                       </Link>
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
