import React from 'react'
import Logo from "../images/logo.png";
import cssModules from '../../css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function NavbarUser() {
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${cssModules.navbar}`}>
            <div className="container">
                <Link className="navbar-brand" to="/"><img src={Logo} width="50px" className="img-fluid" alt="logo" /></Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className={`collapse navbar-collapse navColor ${cssModules.navColor} `} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={`nav-link active klik ${cssModules.klik}`} aria-current="page" to='/complain'>Complain</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link klik ${cssModules.klik}`} aria-current="page" to='/profile'>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link klik ${cssModules.klik}`} aria-current="page" to='/logout'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}


export default NavbarUser;
