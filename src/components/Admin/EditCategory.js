import React from 'react'

const EditCategory = () => {
    return (
        <>
            <form>
                <div className="mb-3 container">
                    <label for="exampleInputEmail1" className="form-label text-light">Category</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )
}

export default EditCategory
