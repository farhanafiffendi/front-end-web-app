import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function EditProduct() {
    return (
        <div>
            <form>
                <div className="mb-3 container">
                    <div class="mb-3">
                        <label for="formFile" class="form-label text-light">Image</label>
                        <input class="form-control" type="file" id="formFile" />
                    </div>
                    <label for="exampleInputEmail1" className="form-label text-light">Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <label for="exampleInputEmail1" className="form-label text-light">Description</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <label for="exampleInputEmail1" className="form-label text-light">Price</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <label for="exampleInputEmail1" className="form-label text-light">Stok</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text text-light"></div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
