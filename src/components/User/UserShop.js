import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cssModule from '../../css/Product.module.css'
import { DataDummy } from '../Data/DataDummy'
import { Link } from "react-router-dom";

function UserShop() {

  const [items, setItems] = useState(DataDummy);

  const filterItem = ((categItem) => {
    const updatedItems = DataDummy.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  })

  return (
    <>
      <div className="container mt-5">
        <h3 className='mb-4'>Product</h3>
        <div className="d-flex justify-content-center">
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => filterItem('KomponenLaptop')}>Komponen Laptop/Dekstop</button>
          <button className={`btn btn-warning ms-3 klik ${cssModule.klik}`} onClick={() => filterItem('Laptop')}>Laptop</button>
          <button className={`btn btn-warning ms-3 klik ${cssModule.klik}`} onClick={() => filterItem('KeyboardMouse')}>Keyboard Mouse</button>
          <button className={`btn btn-warning ms-3 klik ${cssModule.klik}`} onClick={() => filterItem('Printer')}>Printer</button>
          <button className={`btn btn-warning ms-3 klik ${cssModule.klik}`} onClick={() => setItems(DataDummy)}>All</button>
        </div>
      </div>

      <div className="container d-flex flex-wrap mt-5">
        {items.map((elem) => {
          const { id, name, image, price, stok } = elem;

          return (
            <div>
              <div className={cssModule.product1}>
                <img src={require(`../images/${image}`)} width={'100%'} height={'200px'} className='img-fluid mb-2' alt={name} />
                <div>
                  <Link to={`/detail/${id}`}><p className='ps-2'><span>{name}</span ></p></Link>
                  <p className='ps-2'>{price}</p>
                  <p className='ps-2'>Stok: {stok}</p>
                </div>
              </div>
            </div>


          )
        })
        }
      </div >

    </>
  )
}

export default UserShop
