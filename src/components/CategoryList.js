import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function CategoryList() {
    return (
        <div>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CategoryList
