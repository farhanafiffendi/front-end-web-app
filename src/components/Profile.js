import React from 'react'
import foto from "../images/image2.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css'

function Profile() {
    return (
        <div className='container mt-5 text-light'>
            <h3 className='text-warning'>My Profile</h3>
            <div className='row'>
                <div className='col-3'>
                    <img src={foto} alt='' className='img-fluid' />
                </div>
                <div className='col-3 d-flex flex-column'>
                    <p>Name</p>
                    <p>Yosep</p>
                    <p>Email</p>
                    <p>Yosep</p>
                    <p>Phone</p>
                    <p>Yosep</p>
                    <p>Gender</p>
                    <p>Yosep</p>
                    <p>Male</p>
                    <p>Yosep</p>

                </div>
                <div className='col-6'>
                    <h3>My Transaction</h3>
                </div>
            </div>
        </div>
    )
}

export default Profile
