import React from "react";
import "./styles.css";
import {ReactComponent as Logo} from "../../assets/logo.svg"

function NavBar() {
    return(
        <nav className="main-navbar" >
            <Logo />
            <a href="" className="logo-text">DS Delivery</a>
        </nav>
    )
}

export default NavBar;