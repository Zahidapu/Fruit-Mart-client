import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CheckOut = () => {
    const {id}=useParams()
    const [singleProduct,setSingleProduct]=useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/singleProduct/${id}`)
        .then((res) =>res.json())
        .then((data) =>{
            setSingleProduct(data)
        })
    },[id]) 
    
    return (
        <div>
            <h3>Check Out</h3>
            <Table striped bordered hover variant="light" classname="table-style">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleProduct.name}</td>
                        <td>1</td>
                        <td>{singleProduct.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button variant="warning">Check Out</Button>{' '}
        </div>
    );
};

export default CheckOut;