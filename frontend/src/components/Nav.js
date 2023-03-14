import React from "react";
import {NavLink} from 'react-router-dom'
function Nav(){
    return(
        <div className="Navbar">
            <h1>Ecommerce dashboard</h1>
            <ul className="navLinks">
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
                <NavLink to="/login">Log In</NavLink>
            </ul>
        </div>
    )
}

export default Nav