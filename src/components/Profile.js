import React from 'react'
import foto from "../images/image2.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css'

function Profile() {
    return (
        <div className='container mt-5 text-light'>
            <div className='d-flex justify-content-between mb-3'>
                <h3 className='text-warning'>My Profile</h3>
                <h3 className='text-warning'>My Transaction</h3>
            </div>
            <div className='row justify-content-evenly'>
                <div className='col-lg-3 col-sm-12'>
                    <img src={foto} width={('300px')} alt='' className='img-fluid' />
                </div>
                <div className='col-lg-3 col-sm-12 d-flex flex-column'>
                    <p>Name <br /> Farhan Afiffendi </p>
                    <p>Email <br />Farhan</p>
                    <p>Phone <br />08227221221</p>
                    <p>Gender <br />Laki-laki</p>
                    <p>Address <br />Jl.Muspika, deli serdang, Sumatera Utara</p>

                </div>
                <div className='col-6'>
                </div>
            </div>
        </div>
    )
}

export default Profile
