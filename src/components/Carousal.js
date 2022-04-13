import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoBesar from '../images/logoBesar.png';
import { Link } from "react-router-dom";

function Carousal() {
    return (
        <div className='text-light'>
            <img src={LogoBesar} alt="gambar" className="img-fluid" />
            <h1>Easy, Fast and Reliable</h1>
            <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
            <Link to='/' className='btn btn-primary me-3'>Login</Link>
            <Link to='/register' className='btn btn-success'>Register</Link>
        </div>
    )
}

export default Carousal
