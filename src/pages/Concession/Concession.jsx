import "./Concession.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Concession = () => {
    return (
        <>
        <h1 className="Concession">Concession</h1>
        <p>Please visit our showroom for samples of the following items.</p>
        <Table striped bordered>
            <thead>
                <tr>
                    {/* <th>Image</th> */}
                    <th>Categories</th>
                    <th>Products</th> 
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Concession</td>
                    <td>Churro Warmer</td>
                    <td>$25.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Concession</td>
                    <td>Cotton Candy Machine</td>
                    <td>$75.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Concession</td>
                    <td>Nacho Cheeze & Chip Warmer Set</td>
                    <td>$60.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Concession</td>
                    <td>Popcorn Popper w/scoop</td>
                    <td>$60.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Concession</td>
                    <td>Pretzel Warmer</td>
                    <td>$25.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Concession</td>
                    <td>Snow Cone Machine (w/drip pan & ladle)</td>
                    <td>$60.00</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default Concession;