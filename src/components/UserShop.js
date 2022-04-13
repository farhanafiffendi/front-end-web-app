import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/Product.css'
import Mouse from '../images/mouse.png'
import Keyboard from '../images/keyboard.png'

function UserShop() {
  return (
    <div className='container productStyle mt-5'>
      <div className="product1">
        <img src={Mouse} className='img-fluid' alt="" />
        <div className="div">
          <p><span>Mouse</span></p>
          <p>Rp.500.000</p>
          <p>Stok: 600</p>
        </div>

      </div>
      <div className="product1">
        <img src={Keyboard} className='img-fluid' alt="" />
      </div>
    </div>

  )
}

export default UserShop
