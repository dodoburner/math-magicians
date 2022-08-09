import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header>
    <h1 className="header-title">Math Magicians</h1>
    <ul>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Quotes">Quotes</Link>
      </li>
    </ul>
  </header>
);

export default Header;
