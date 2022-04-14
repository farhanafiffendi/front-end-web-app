import React from 'react'
import foto from "../images/image2.jpeg";
import cssModule from '../../css/profile.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import mouse from '../images/mouse.png'
// import Keyboard from '../images/keyboard.png'

function Profile() {
    return (
        <div className='container mt-5 text-light'>
            <div className='row justify-content-between'>
                <div className={`col-lg-3 col-sm-12 teks ${cssModule.teks}`}>
                    <h3 className='mb-3'>My Profile</h3>
                    <div className='d-flex'>
                        <img src={foto} width={'300px'} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className="col-lg-3 mt-5 nama">
                    <p>Name: <br />Farhan Afiffendi</p>
                    <p>Email: <br /> farhanafif@gmail.com</p>
                    <p>Phone: <br /> 08222142421</p>
                    <p>Gender: <br /> Laki-laki</p>
                    <p>Address: <br /> Jl Muspika, Deli Serdang, Sumatera Utara</p>
                </div>
                <div className="col-lg-6 col-sm-12 d-flex flex-column align-items-end">
                    <h3 className='mb-3'>My Transaction</h3>
                    <div className={`transaksi px-2 d-flex align-items-center ${cssModule.transaksi} `}>
                        <img src={mouse} width={'29%'} className='img-fluid' alt="" />
                        <div className={`d-flex flex-column harga ${cssModule.harga} `}>
                            <p> Mouse</p>
                            <span><p>Saturday</p></span>
                            <p>Price: Rp.500.000</p>
                            <p>Sub Total: Rp.500.000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
