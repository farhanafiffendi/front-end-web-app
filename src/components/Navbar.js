import React from 'react'
import Logo from "../images/logo.png";
import '../css/navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={Logo} width="50px" className="img-fluid" alt="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navColor" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Complain</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Catergory</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
