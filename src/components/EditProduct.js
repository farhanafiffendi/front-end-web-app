import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function EditProduct() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default EditProduct
