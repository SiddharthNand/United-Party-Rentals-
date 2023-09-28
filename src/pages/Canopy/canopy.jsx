import React from 'react';
import "./canopy.css"

import { Card, Col, Container, Row } from 'react-bootstrap';

const Canopy = (props) => {
    return (
        <div className="canopyPage">
            <h1 className="canopyHeading">Canopy</h1>
            <p>All canopies are white. See <a href="/gallery">gallery</a> for images.</p>
            <Container fluid>
                <Row xs={1} md={3} className="g-4">
                    {props.products.map((product) => (
                        <Col key={product.id}>
                            <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "400px" }}>
                                <Card className="text-center border-0" style={{ width: "18rem" }}>
                                    <Card.Img
                                        variant="top"
                                        src={product.imageUrl}
                                        alt={product.name}
                                        style={{ maxWidth: "250px", maxHeight: "250px", marginTop: "10px" }}
                                        className="mx-auto"
                                    />
                                    <Card.Body>
                                        <Card.Title dangerouslySetInnerHTML={{ __html: product.name }}></Card.Title>
                                        <Card.Text>{product.price}</Card.Text>
                                        <Card.Text>Call for Quote</Card.Text> {/* Add this line */}
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

const products = [
    { id: 1, name: "10 x 10 Standard", imageUrl: "https://i.imgur.com/HxobU1J.jpg" },
    { id: 2, name: "10 x 20 Standard", imageUrl: "https://i.imgur.com/6cW6vcg.jpg" },
    { id: 3, name: "15 x 15 Standard", imageUrl: "https://i.imgur.com/w4xKJxh.jpg" },
    { id: 4, name: "15 x 20 Standard", imageUrl: "https://i.imgur.com/9PrNRnA.jpg" },
    { id: 5, name: "20 x 20 Standard", imageUrl: "https://i.imgur.com/VJ0sQQT.jpg" },
    { id: 6, name: "20 x 30 Standard", imageUrl: "https://i.imgur.com/8XQRC2H.jpg" },
    { id: 7, name: "20 x 40 Standard", imageUrl: "https://i.imgur.com/niM8Kjo.jpg" },
    { id: 8, name: "20 x 60 Standard", imageUrl: "https://i.imgur.com/hHlshr7.jpg" },
    { id: 9, name: "30 x 30 Standard", imageUrl: "https://i.imgur.com/WKPZmc0.png" },
    { id: 10, name: "40 x 40 Standard", imageUrl: "https://i.imgur.com/odM7HPo.jpg" },
    { id: 11, name: "40 x 60 Standard", imageUrl: "https://i.imgur.com/24rJa5n.jpg" },
];

function App() {
    return (
        <div className="App">
            <Canopy products={products} />
        </div>
    );
}

export default App;


