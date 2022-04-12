import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import LogoBesar from '../images/logoBesar.png'

const Carousal = () => {
    return (
        <div>
            <img src={LogoBesar} alt="gambar" className="img-fluid" />
            <h1>Easy, Fast and Reliable</h1>
            <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
        </div>
    )
}

export default Carousal
