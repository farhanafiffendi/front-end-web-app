import React from 'react'
import '../css/FormLogin.css'
import Carousal from './Carousal'
import 'bootstrap/dist/css/bootstrap.min.css'

function FormRegister() {
    return (
        <div className='container justify-content-center mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <Carousal />
                </div>
                <div className='col-lg-6 col-sm-12 mt-5'>
                    <div className="containerLogin">
                        <form method=''>
                            <h2>Register</h2>
                            <label>Name</label>
                            <input type="text" placeholder="Name" />
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                            <label>Password</label>
                            <input type="password" placeholder="Password" />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default FormRegister
