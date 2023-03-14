import "./Vendors.css"
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Vendors = (props) => {
    return (
        <div className="vendorsPage">
            <h1 className="tableTitle">Vendors</h1>
            <Container fluid>
                <Row xs={1} md={3} className="g-4">
                    {props.products.map((product) => (
                        <Col key={product.id}>
                            <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
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
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text>
                                            <a href={product.website}target="_blank" rel="noreferrer">{product.website} </a>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

const products = [
    {
        id: 1,
        name: "Menefee Canvas Space",
        description: "Rent a versatile party space for your next event and create unforgettable memories with your loved ones.",
        website: "https://www.menefeespace.com/",
        imageUrl: "https://i.imgur.com/q1VOPvW.png"
    },
];

function App() {
    return (
        <div className="App">
            <Vendors products={products} />
        </div>
    );
}

export default App;