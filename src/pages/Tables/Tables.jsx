import "./Tables.css"
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Tables = (props) => {
    return (
      <div className="tablesPage">
        <h1 className="tableTitle">Tables</h1>
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
                      <Card.Text>{product.price}</Card.Text>
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
  { id: 1, name: "Table 2' x 4'", price: "$10.00 Each", imageUrl: "https://i.imgur.com/cjq8ynz.jpg" },
  { id: 2, name: "Table 24 Round BAR HEIGHT", price: "$15.00 Each", imageUrl: "https://i.imgur.com/LD4vDGB.jpg" },
  { id: 3, name: "Table 24 Round Pedestal", price: "$15.00 Each", imageUrl: "https://i.imgur.com/ZBW8L2P.jpg" },
  { id: 4, name: "Table 3' x 3' Card Table", price: "$10.00 Each", imageUrl: "https://i.imgur.com/A3wIopQ.jpg" },
  { id: 5, name: "Table 30 Round BAR HEIGHT", price: "$16.00 Each", imageUrl: "https://i.imgur.com/3WweItl.jpg" },
  { id: 6, name: "Table 30 Round BAR HEIGHT one piece", price: "$16.00 Each", imageUrl: "https://i.imgur.com/flqNser.jpg" },
  { id: 7, name: "Table 30 Round Pedestal one piece", price: "$16.00 Each", imageUrl: "https://i.imgur.com/XXsraYe.jpg" },
  { id: 8, name: "Table 36 Round CHILDREN", price: "$12.00 Each", imageUrl: "https://i.imgur.com/9dhzqh9.png" },
  { id: 9, name: "Table 36 Round seats 4", price: "$12.00 Each", imageUrl: "https://i.imgur.com/9dhzqh9.png" },
  { id: 10, name: "Table 48 Round seats 6", price: "$14.00 Each", imageUrl: "https://i.imgur.com/nDo8DWi.png" },
  { id: 11, name: "Table 5' Banquet", price: "$10.00 Each", imageUrl: "https://i.imgur.com/6ufbsEL.jpg" },
  { id: 12, name: "Table 6' Banquet seats 6-8", price: "$11.00 Each", imageUrl: "https://i.imgur.com/7ZcnO3G.jpg" },
  { id: 13, name: "Table 6' Serpentine", price: "$11.00 Each", imageUrl: "https://i.imgur.com/4lIftSx.jpg" },
  { id: 14, name: "Table 6' x 18 Conference", price: "$11.00 Each", imageUrl: "https://i.imgur.com/Bf2vfuU.jpg" },
  { id: 15, name: "Table 6' x 30 x 24 CHILDREN", price: "$11.00 Each", imageUrl: "https://i.imgur.com/l0fSRjl.jpg" },
  { id: 16, name: "Table 60 Round seats 8", price: "$15.00 Each", imageUrl: "https://i.imgur.com/OTt5wZl.png" },
  { id: 17, name: "Table 72 Round seats 10", price: "$16.00 Each", imageUrl: "https://i.imgur.com/auLVh2N.png" },
  { id: 18, name: "Table 8' Banquet seat 8-10", price: "$12.00 Each", imageUrl: "https://i.imgur.com/7ZcnO3G.jpg" },
  { id: 19, name: "Table 8' x 30 x 24 CHILDREN", price: "$12.00 Each", imageUrl: "https://i.imgur.com/l0fSRjl.jpg" },
];

function App() {
  return (
    <div className="App">
      <Tables products={products} />
    </div>
  );
}

export default App;