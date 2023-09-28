import "./Chairs.css"
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Chairs = (props) => {
    return (
      <div className="chairPage">
        <h1 className="chairHeading">Chairs</h1>
        <p>Please visit our showroom for samples of the following items.</p>

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
  }

const products = [
  { id: 1, name: "White Folding", price: "$1.25 Each", imageUrl: "https://i.imgur.com/8mzbFk7.jpg" },
  { id: 9, name: "White Bistro", price: "$2.00 Each", imageUrl: "https://i.imgur.com/gQbZ7GK.jpg" },
   { id: 3, name: "White Padded Resin", price: "$3.50 Each", imageUrl: "https://i.imgur.com/pq01j1N.jpg" },
   { id: 2, name: "Black Padded Resin", price: "$3.75 Each", imageUrl: "https://i.imgur.com/CiRIFSu.jpg" },
   { id: 5, name: "Chivari Gold w/padding", price: "$8.00 Each", imageUrl: "https://i.imgur.com/JsXTgFy.jpg" },
   { id: 6, name: "Chivari Silver w/padding", price: "$8.00 Each", imageUrl: "https://i.imgur.com/jOqdsK8.jpg" },
  { id: 7, name: "Barstool", price: "$8.00 Each", imageUrl: "https://i.imgur.com/PUqOl5p.jpg" },
  { id: 4, name: "White Folding CHILDREN", price: "$1.25 Each", imageUrl: "https://i.imgur.com/8mzbFk7.jpg" },
  { id: 8, name: "White Wicker <br> ***Cushion Not Included***", price: "$50.00 Each", imageUrl: "https://i.imgur.com/BYIb8cR.jpg" },
];

function App() {
  return (
    <div className="App">
      <Chairs products={products} />
    </div>
  );
}

export default App;