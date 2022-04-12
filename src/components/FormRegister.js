import React from 'react'
import '../css/FormLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormRegister = () => {
    return (
        <div>
            <div className="container">
                <form method=''>
                    <h2>Register</h2>
                    <label>Name</label>
                    <input type="text" placeholder="Name"></input>
                    <label>Email</label>
                    <input type="email" placeholder="Email"></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default FormRegister
