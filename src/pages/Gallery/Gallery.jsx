import React from "react";
import { Table } from 'react-bootstrap';
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
        <h1 className="photo-gallery">Gallery</h1>
        <Table className="gallery">
            <thead>
                <tr>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="https://i.imgur.com/LmB5Guh.png" alt="Job Site"></img><br></br></td>
                    <td><img src="https://i.imgur.com/L4iKmzW.png" alt="Job Site"></img><br></br></td>
                    <td><img src="https://i.imgur.com/p7y4jNA.jpg" alt="Job Site"></img><br></br></td>
                    
                </tr>
                <tr>
                <td><img src="https://i.imgur.com/Dzd8zOZ.png" alt="Job Site"></img><br></br></td>
                <td><img src="https://i.imgur.com/17YJzRS.jpg" alt="Job Site"></img><br></br></td>
                <td><img src="https://i.imgur.com/SP1SwNC.jpg" alt="Job Site"></img><br></br></td>
                </tr>
                <tr>
                <td><img src="https://i.imgur.com/Jh4532I.png" alt="Job Site"></img><br></br></td>
                <td><img src="https://i.imgur.com/MMAaNn7.png" alt="Job Site"></img><br></br></td>
                <td><img src="https://i.imgur.com/vamCcU4.png" alt="Job Site"></img><br></br></td>
                </tr>
            </tbody>
        </Table>
        </>
  )
}

export default Gallery
