import "./Flatware.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Flatware = () => {
    return (
        <>
        <h1 className="Flatware">Flatware</h1>
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
                    <td>Flatware</td>
                    <td>Dinner Fork, s/s Towne</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Dinner Fork, Silver</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Flatware</td>
                    <td>Dinner Forks, s/s Fan</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Dinner Knife, s/s Towne</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Dinner Knife, Silver</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Dinner Knives s/s Fan</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Salad Fork, s/s Fan</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Salad Fork, s/s Towne</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Salad Fork, Silver</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Teaspoon, Fan</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Teaspoon, Silver</td>
                    <td>$0.50 Each</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Flatware</td>
                    <td>Teaspoon, Towne</td>
                    <td>$0.50 Each</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default Flatware;