import React from "react";
import logo from "../../assets/images/logo.png"
import "../../assets/stylesheets/styles.scss"
import {Link} from "react-router-dom"


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light mx-5 px-5">
            <Link to="/">
                 <span>
                     Home
                 </span>
            </Link>
            <Link to="/findCountry">
                 <span>
                Find Country
            </span>
            </Link>

        </nav>
    )
}

export default Header