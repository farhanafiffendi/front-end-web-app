import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import data from '../Data/DataDummy'
import { Modal, Button } from 'react-bootstrap';


function CategoryList() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

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
                                    <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger" onClick={handleShow}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default CategoryList
