import React from "react";
import "./styles.css";
import {ReactComponent as Instagram} from "../../assets/Instagram.svg"
import {ReactComponent as Linkedin} from "../../assets/Linkedin.svg"


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.linkedin.com/in/raissa-vieira-engenharia/" target="_new">
                    <Linkedin/>
                </a>
                <a href="https://www.instagram.com/raissa.sv/" target="_new">
                    <Instagram/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;