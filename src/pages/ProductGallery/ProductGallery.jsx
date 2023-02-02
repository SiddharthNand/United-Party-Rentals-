import React from 'react'
import "./ProductGallery.css";
import { Table } from 'react-bootstrap';

const ProductGallery = () => {
  return (
    <>
    <h1 className="photo-gallery">Product Gallery</h1>
    <Table className="photo-gallery">
        <thead>
            <tr>
                
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img src="https://i.imgur.com/iUdJ66d.png" alt="chair"></img><br></br>36" Round Table</td>
                <td><img src="https://i.imgur.com/f5zYim3.png" alt="chair"></img><br></br>48" Round Table</td>
                <td><img src="https://i.imgur.com/T1TkvhP.png" alt="chair"></img><br></br>60" Round Table</td>
                
            </tr>
            <tr>
                <td><img src="https://i.imgur.com/TeWZauY.png" alt="chair"></img><br></br>72" Round Table</td>
            </tr>
        </tbody>
    </Table>
    </>
  )
}

export default ProductGallery