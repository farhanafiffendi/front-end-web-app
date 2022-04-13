import React from 'react'
import Logo from "../images/logo.png";
import '../css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/profil"><img src={Logo} width="50px" className="img-fluid" alt="logo" /></Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse navColor" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/profil'>Complain</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/product'>Category</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to='/product'>Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
