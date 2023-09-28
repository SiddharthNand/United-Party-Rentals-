import React from 'react';
import "./Tables.css"
import { Card, Col, Container, Row } from 'react-bootstrap';

const Tables = (props) => {
    return (
        <div className="tablesPage">
            <h1 className="tableTitle">Tables</h1>
            <p>Please visit our showroom for samples of the following items.</p>
            <br></br>
            <Container fluid>
                <Row xs={1} md={4} className="g-4">
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
                                        <Card.Text>Seats {product.seatingCapacity}</Card.Text> {/* Add this line */}
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
  { id: 2, name: "24in Round BAR HEIGHT", price: "$15.00 Each", imageUrl: "https://i.imgur.com/LD4vDGB.jpg", seatingCapacity: "2 - 3" },

  { id: 3, name: "24in Round Pedestal", price: "$15.00 Each", imageUrl: "https://i.imgur.com/ZBW8L2P.jpg", seatingCapacity: 2 },
  
  { id: 5, name: "30in Round BAR HEIGHT", price: "$16.00 Each", imageUrl: "https://i.imgur.com/3WweItl.jpg", seatingCapacity: "3 - 4"},
  
  { id: 7, name: "30in Round Pedestal <br> One Piece", price: "$16.00 Each", imageUrl: "https://i.imgur.com/XXsraYe.jpg", seatingCapacity: "3 - 4" },
  
  
  
  
  { id: 1, name: "2ft x 4ft", price: "$10.00 Each", imageUrl: "https://i.imgur.com/cjq8ynz.jpg", seatingCapacity: 4 },
  
  { id: 4, name: "3ft x 3ft Card Table", price: "$10.00 Each", imageUrl: "https://i.imgur.com/A3wIopQ.jpg", seatingCapacity: 4 },
  
  { id: 11, name: "5ft Banquet", price: "$10.00 Each", imageUrl: "https://i.imgur.com/6ufbsEL.jpg", seatingCapacity: 6 },
  
  { id: 13, name: "6ft Serpentine", price: "$11.00 Each", imageUrl: "https://i.imgur.com/4lIftSx.jpg", seatingCapacity: "0. Display Table/Serving Table" },
  
  
  
  { id: 12, name: "6ft Banquet", price: "$11.00 Each", imageUrl: "https://i.imgur.com/7ZcnO3G.jpg", seatingCapacity:"6 - 8" },
  
  { id: 14, name: "6ft x 18in Conference", price: "$11.00 Each", imageUrl: "https://i.imgur.com/Bf2vfuU.jpg", seatingCapacity: 3 },
  
  { id: 18, name: "8ft Banquet", price: "$12.00 Each", imageUrl: "https://i.imgur.com/7ZcnO3G.jpg", seatingCapacity: "8 - 10" },
  

  
  
  { id: 9, name: "36in Round", price: "$13.00 Each", imageUrl: "https://i.imgur.com/9dhzqh9.png", seatingCapacity: 4 },
  
  { id: 10, name: "48in Round", price: "$14.00 Each", imageUrl: "https://i.imgur.com/nDo8DWi.png", seatingCapacity: 6 },
  
  { id: 16, name: "60in Round", price: "$15.00 Each", imageUrl: "https://i.imgur.com/OTt5wZl.png", seatingCapacity: 8 },
  
  { id: 17, name: "72in Round", price: "$16.00 Each", imageUrl: "https://i.imgur.com/auLVh2N.png", seatingCapacity: 10 },
  
  

  { id: 8, name: "36in Round <br> CHILDREN", price: "$13.00 Each", imageUrl: "https://i.imgur.com/9dhzqh9.png", seatingCapacity: 4 },
  
  { id: 15, name: "6ft x 30in x 24in CHILDREN", price: "$11.00 Each", imageUrl: "https://i.imgur.com/l0fSRjl.jpg", seatingCapacity: 10 },
  
  { id: 19, name: "8ft x 30in x 24in CHILDREN", price: "$12.00 Each", imageUrl: "https://i.imgur.com/l0fSRjl.jpg", seatingCapacity: 12 },
  
  ];

function App() {
    return (
        <div className="App">
            <Tables products={products} />
        </div>
    );
}
export default App;


