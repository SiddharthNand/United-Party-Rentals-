import "./Decoration.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Decoration = () => {
    return (
        <>
        <h1 className="Decoration">Decoration</h1>
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
                    <td>Decoration</td>
                    <td>Arch, Wt. Metal</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Arch, Wt. Wood 20" Deep</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Decoration</td>
                    <td>Arch, Wt. Wood 30" Deep</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Arch, Gold</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Arch, Gold Heart Shaped</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Bookstand, Brass</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Bookstand, White Wood Lattice</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Easel</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Ficus Tree 6'</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Kneeling Bench ( Pair )</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Pillars, 20" White</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Pillars, 30" White</td>
                    <td>$25.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Pillars, 40" White</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Pillars, White 6'</td>
                    <td>$40.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Decoration</td>
                    <td>Wishing Well, white</td>
                    <td>$40.00</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default Decoration;