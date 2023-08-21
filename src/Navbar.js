import React from "react";
import {Link} from "react-router-dom";
import "./App.css";
const Navbar=()=>{
    return(
       <header>
         <h1>Western Life</h1>
         <nav>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Saddle & Spurs</Link></li>
            <li><Link to="/contact">Frontier Trails</Link></li>
            </nav>
        </header>

    );
};
export default Navbar;