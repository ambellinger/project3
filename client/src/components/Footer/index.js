import React from "react";
import "../Footer/style.css";

function Footer({ children }) {
 return (
  <div
  style={{ backgroundColor: "black"}}
   className="footer"
  >
    <p className="footerText">this will be a styled footer</p>
    {children}
  </div>
 );
}

export default Footer;