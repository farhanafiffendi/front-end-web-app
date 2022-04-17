import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import mouse from '../images/mouse.png'
import DataDummy from '../Data/DataDummy'
import { useParams } from 'react-router-dom'

function DetailShop() {

    const params = useParams()
    const index = params.id

    return (
        <div className="container mt-5 text-light">
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-lg-6">
                            <img src={require(`../images/${DataDummy[index].image}`)} width={'70%'} className="img-fluid" alt="halo" />
                        </div>
                        <div className="col-lg-6">
                            <h2>{DataDummy[index].name}</h2>
                            <p>Stok: {DataDummy[index].stok}</p>
                            <p>
                                - Wireless Mouse <br />
                                - Konektivitas wireless 2.4 GHz <br />
                                - Jarak wireless hingga 10 m <br />
                                - Plug and Play <br />
                                - Baterai tahan hingga 12 bulan <br /> <br />

                                {DataDummy[index].description}
                            </p>
                            <div className="btn btn-danger w-100"> Buy</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DetailShop
