import React from 'react'
import '../css/FormLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousal from './Carousal'
import { Link } from "react-router-dom";

function FormLogin() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <Carousal />
                </div>
                <div className='col-lg-6 col-sm-12 mt-5'>
                    <div className="containerLogin">
                        <form method=''>
                            <h2>Login</h2>
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                            <Link to='/profil' className='btn btn-primary me-3'>Login</Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FormLogin
