import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import mouse from './images/mouse.png'
// import keyboard from './images/keyboard.png'


const data = [
    {
        id: 1,
        image: "./foto/laptop-gaming.jpg",
        name: "Laptop",
        description: "Asus memiliki beragam lini produk laptop unggulan di berbagai kategori berdasarkan kebutuhan pengguna. ProArt merupakan seri laptop yang cocok untuk kebutuhkan profesional, seperti arsitek, animator, maupun desainer game. ZenBook, laptop canggih yang pas untuk pengguna dengan mobilitas tinggi. Dan, VivoBook untuk kamu yang menyukai laptop ringkas nan elegan.",
        price: "5.000.000",
        qty: "200"
    },
    {
        id: 2,
        image: "./foto/laptop-gaming.jpg",
        name: "Laptop",
        description: "Asus memiliki beragam lini produk laptop unggulan di berbagai kategori berdasarkan kebutuhan pengguna. ProArt merupakan seri laptop yang cocok untuk kebutuhkan profesional, seperti arsitek, animator, maupun desainer game. ZenBook, laptop canggih yang pas untuk pengguna dengan mobilitas tinggi. Dan, VivoBook untuk kamu yang menyukai laptop ringkas nan elegan.",
        price: "5.000.000",
        qty: "200"
    },
    {
        id: 3,
        image: "./foto/laptop-gaming.jpg",
        name: "Laptop",
        description: "Asus memiliki beragam lini produk laptop unggulan di berbagai kategori berdasarkan kebutuhan pengguna. ProArt merupakan seri laptop yang cocok untuk kebutuhkan profesional, seperti arsitek, animator, maupun desainer game. ZenBook, laptop canggih yang pas untuk pengguna dengan mobilitas tinggi. Dan, VivoBook untuk kamu yang menyukai laptop ringkas nan elegan.",
        price: "5.000.000",
        qty: "200"
    },
    {
        id: 4,
        image: "./foto/laptop-gaming.jpg",
        name: "Laptop",
        description: "Asus memiliki beragam lini produk laptop unggulan di berbagai kategori berdasarkan kebutuhan pengguna. ProArt merupakan seri laptop yang cocok untuk kebutuhkan profesional, seperti arsitek, animator, maupun desainer game. ZenBook, laptop canggih yang pas untuk pengguna dengan mobilitas tinggi. Dan, VivoBook untuk kamu yang menyukai laptop ringkas nan elegan.",
        price: "5.000.000",
        qty: "200"
    },
]

function ProductList() {
    return (
        <div className='container mt-5'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Desc</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td><img src={item.image} width={'60px'} className='img-fluid' alt="" /></td>
                                <td>Mark</td>
                                <td>{item.description.slice(0, 40) + '...'}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
