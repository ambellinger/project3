import React from "react";
import "../Nav/style.css";


function Nav() {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Explore Chicago Architecture
      </a>
      <a className="nav-item" href="/saved">My Saved Buildings</a>
    </nav>
  );
}

export default Nav;
