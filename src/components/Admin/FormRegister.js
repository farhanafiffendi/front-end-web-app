import React from 'react'
import cssModule from '../../css/register.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoBesar from '../images/logoBesar.png';
import { Link } from "react-router-dom";

function FormRegister() {
    return (
        <div className="container mt-5 text-light">
            <div className="col-lg-12 d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-6 carousel col-sm-12">
                        <div className='text-light'>
                            <img src={LogoBesar} alt="gambar" className="img-fluid" />
                            <h1>Easy, Fast and Reliable</h1>
                            <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
                            <Link to='/login' className='btn btn-primary me-3'>Login</Link>
                            <Link to='/register' className='btn btn-success'>Register</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-5 d-flex justify-content-center">
                        <div className={cssModule.containerRegister}>
                            <form method=''>
                                <h2>Register</h2>
                                <label>Name</label>
                                <input type="text" placeholder="Name" />
                                <label>Email</label>
                                <input type="email" placeholder="Email" />
                                <label>Password</label>
                                <input type="password" placeholder="Password" />
                                <button type="submit">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FormRegister
