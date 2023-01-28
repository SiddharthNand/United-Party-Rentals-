import "./Chairs.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const RentalsTable = () => {
    return (
        <>
        <h1 className="chair">Chair</h1>
        <Table striped bordered hover>
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
                    <td>Chair</td>
                    <td>Barstool</td>
                    <td>$8</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>White WICKER</td>
                    <td>$50</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Chair</td>
                    <td>Chivari Gold w/padding</td>
                    <td>$8</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>Chivari Silver w/padding</td>
                    <td>$8</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair Cover</td>
                    <td>Universal: Satin Silver</td>
                    <td>$6</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>White Bistro</td>
                    <td>$2</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>White Folding CHILDREN</td>
                    <td>$1.25</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>White Plastic Folding</td>
                    <td>$1.25</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>Black Padded Resin</td>
                    <td>$3.75</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Chair</td>
                    <td>White Padded Resin</td>
                    <td>$3.50</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default RentalsTable;
