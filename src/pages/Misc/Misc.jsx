import "./Misc.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Misc = () => {
    return (
        <>
        <h1 className="Misc">Miscellaneous</h1>
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
                    <td>Misc</td>
                    <td>Fan, 42" Drum, 2 speed</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Fire Kit</td>
                    <td>$50.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td>   */}
                    <td>Misc</td>
                    <td>Flag (USA or CA ) w/stand</td>
                    <td>$15.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Garbage Can, 30 Gal</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Garment Rack</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Heater, Mushroom Top, w/Propane</td>
                    <td>$85.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Podium, Freestanding w/Audio</td>
                    <td>$125.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Podium, Freestanding w/Wireless Audio ac/dc</td>
                    <td>$175.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Podium, Table-top No Audio</td>
                    <td>$15.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Projection Screen 5' x 5' Tripod</td>
                    <td>$35.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Raffle Drum</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Speaker, Tripod Bluetooth</td>
                    <td>$100.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Tug of War Rope</td>
                    <td>$30.00</td>
                </tr>
                <tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Umbrella, Market 9' White</td>
                    <td>$30.00</td>
                </tr><tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Umbrella, Market 9' Ivory</td>
                    <td>$30.00</td>
                </tr><tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Wheel Of Fortune, 30"</td>
                    <td>$40.00</td>
                </tr><tr>
                    {/* <td>Image</td> */}
                    <td>Misc</td>
                    <td>Wheel Of Fortune, 40"</td>
                    <td>$60.00</td>
                </tr>

            </tbody>
        </Table>
        </>
    );
}

export default Misc;