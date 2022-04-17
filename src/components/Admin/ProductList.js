import 'bootstrap/dist/css/bootstrap.min.css'
import product from '../Data/DataDummy'
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react'

function ProductList() {

    const navigate = useNavigate();

    const handleProduct = () => {
        navigate("/productlist/edit-product");
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to Delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

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
                        {product.map((item) => {
                            const { id, image, name, price, stok, description } = item;
                            return (
                                <tr>
                                    <th scope="row">{id}</th>
                                    <td><img src={require(`../images/${image}`)} width={'60px'} className='img-fluid' alt="" /></td>
                                    <td>{name}</td>
                                    <td>{`${description}`.slice(0, 40) + '...'}</td>
                                    <td>{price}</td>
                                    <td>{stok}</td>
                                    <td><button className="btn btn-success" onClick={handleProduct}>Edit</button> <button className="btn btn-danger" onClick={handleShow}>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList
