import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} PT Clinic. All rights reserved.</p>
      <p>123 Recovery Road, Cullowhee, NC</p>
    </footer>
  );
}

export default Footer;
