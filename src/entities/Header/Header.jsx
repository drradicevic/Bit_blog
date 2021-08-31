import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => (
   
    <nav className='navbar-header'>
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/authors">Authors</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul> */}

<ul>
        <li><a href="/">Home</></li>
        <li><a href="/authors">Authors</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
);

export { Header };



