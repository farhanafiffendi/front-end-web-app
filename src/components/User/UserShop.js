import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cssModule from '../../css/Product.module.css'
import DataDummy from '../Data/DataDummy'

function UserShop() {

  const [items, setItems] = useState(DataDummy);

  const filterItem = (categItem) => {
    const updatedItems = DataDummy.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  }

  return (
    <>
      <div className="menu-tabs container mt-5">
        <div className="menu-tab d-flex justify-content-around">
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => filterItem('Hardware')}>Hardware</button>
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => filterItem('Device')}>Device</button>
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => filterItem('Accessories')}>Accessories</button>
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => filterItem('Design')}>Design</button>
          <button className={`btn btn-warning klik ${cssModule.klik}`} onClick={() => setItems(DataDummy)}>All</button>
        </div>
      </div>

      <div className="container d-flex flex-wrap mb-3 mt-5">
        {items.map((elem) => {
          const { id, name, image, price, stok } = elem;

          return (
            <div>
              <div className={cssModule.product1}>
                <img src={image} width={'100%'} height={'200px'} className='img-fluid' alt={name} />
                <div>
                  <p><span>{name}</span></p>
                  <p>{price}</p>
                  <p>Stok: {stok}</p>
                </div>
              </div>
            </div>


          )
        })
        }
      </div>

    </>
  )
}

export default UserShop
