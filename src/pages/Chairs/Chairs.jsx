import "./Chairs.css"
import React from 'react';
import { Table } from 'react-bootstrap';

const Chairs = () => {
    return (
        <>
        <h1 className="chair">Chair</h1>
        <Table className="chairs">
            <thead>
                <tr>
                    <th>Image</th>
                    {/* <th>Categories</th> */}
                    <th>Products</th> 
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="https://i.imgur.com/PUqOl5p.jpg"alt="canopy" /></td>
                    <td>Barstool</td>
                    <td>$8</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/6cW6vcg.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>White Wicker</td>
                    <td>$50</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/JsXTgFy.jpg"alt="canopy" /></td>  
                    {/* <td>Chair</td> */}
                    <td>Chivari Gold w/padding</td>
                    <td>$8</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/jOqdsK8.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>Chivari Silver w/padding</td>
                    <td>$8</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/gQbZ7GK.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>White Bistro</td>
                    <td>$2</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/H9024yy.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>White Folding CHILDREN</td>
                    <td>$1.25</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/8mzbFk7.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>White Plastic Folding</td>
                    <td>$1.25</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/CiRIFSu.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>Black Padded Resin</td>
                    <td>$3.75</td>
                </tr>
                <tr>
                    <td><img src="https://i.imgur.com/pq01j1N.jpg"alt="canopy" /></td>
                    {/* <td>Chair</td> */}
                    <td>White Padded Resin</td>
                    <td>$3.50</td>
                </tr>
            </tbody>
        </Table>
        </>
    );
}

export default Chairs;
