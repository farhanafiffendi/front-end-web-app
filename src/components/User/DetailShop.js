import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import mouse from '../images/mouse.png'

function DetailShop() {
    return (

        <div className="container mt-5 text-light">
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex justify-content-start align-items-center">
                        <div className="col-lg-6">
                            <img src={mouse} width={'70%'} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Mouse</h2>
                            <p>Stok: 600</p>
                            <p>
                                - Wireless Mouse <br />
                                - Konektivitas wireless 2.4 GHz <br />
                                - Jarak wireless hingga 10 m <br />
                                - Plug and Play <br />
                                - Baterai tahan hingga 12 bulan <br /> <br />

                                Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah
                                dibawa. Mouse ini menggunakan
                                frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan
                                dengan penerima USB yang
                                kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung
                                sistem operasi Windows 7,8, 10
                                keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.
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
