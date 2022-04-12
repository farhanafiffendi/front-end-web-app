import React from 'react'
import '../css/FormLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const FormLogin = () => {
    return (
        <div>
            <div className="container">
                <form method=''>
                    <h2>Login</h2>
                    <label>Email</label>
                    <input type="text" placeholder="Email"></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password"></input>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin
