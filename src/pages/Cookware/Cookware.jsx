import "./Cookware.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Cookware = () => {
    return (
        <>
        <h1 className="Cookware">Cookware</h1>
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
                    <td>Cookware</td>
                    <td>BBQ 2' x 3' Propane</td>
                    <td>$100.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>BBQ 2' x 3' Charcoal</td>
                    <td>$60.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Cookware</td>
                    <td>BBQ 2' x 5' Propane</td>
                    <td>$150.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>BBQ 2' x 5' Charcoal</td>
                    <td>$75.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>BBQ 2' x 5' Charcoal Rotisserrie</td>
                    <td>$150.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Meat Slicer</td>
                    <td>$40.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Pancake Griddle 18"x22"</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Steamtable, 6 Section w/ Propane</td>
                    <td>$150.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Stock Pot, 30 Qt. w/ Lid</td>
                    <td>$15.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Stock Pot, 40 Qt. w/ Lid</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Stock Pot, 60 Qt. w/ Lid</td>
                    <td>$25.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Stock Pot, 80 Qt. w/ Lid</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Cookware</td>
                    <td>Stock Pot, 100 Qt. w/ Lid</td>
                    <td>$35.00</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default Cookware;