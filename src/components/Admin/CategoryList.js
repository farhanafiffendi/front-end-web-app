import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const data = [
    {
        id: 1,
        category: "Mouse"
    },
    {
        id: 2,
        category: "Keyboard"
    },
    {
        id: 3,
        category: "Laptop"
    },
    {
        id: 4,
        category: "Webcam"
    },
]

function CategoryList(props) {
    return (

        <div className='container'>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.category}</td>
                                <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
