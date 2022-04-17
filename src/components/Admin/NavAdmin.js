import React from 'react'
import Logo from "../images/logo.png";
import cssModules from '../../css/navbar.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";

function NavAdmin() {

    const navLinkActive = ({ isActive }) => {
        return {
            color: isActive ? 'red' : 'white',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${cssModules.navbar}`}>
            <div className="container">
                <NavLink className="navbar-brand" to="/"><img src={Logo} width="50px" className="img-fluid" alt="logo" /></NavLink>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className={`collapse navbar-collapse navColor ${cssModules.navColor} `} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink style={navLinkActive} className={`nav-link active klik ${cssModules.klik}`} aria-current="page" to='/complain'>Complain</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={navLinkActive} className={`nav-link klik ${cssModules.klik}`} aria-current="page" to='/category'>Category</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={navLinkActive} className={`nav-link klik ${cssModules.klik}`} aria-current="page" to='/productlist'>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink style={navLinkActive} className={`nav-link klik ${cssModules.klik}`} aria-current="page" to='/logout'>Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}


export default NavAdmin;
