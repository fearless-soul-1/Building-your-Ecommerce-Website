import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Container>
        <h1 className="text-center p-3 mb-5">The Generics</h1>
        <Row className="justify-content-center">
          {productsArr.map((product, index) => (
            <Col>
              <Card className="mb-4 border-0" key={index} style={{ width: "18rem" }}>
                <Card.Title className="text-center pt-3">
                  {product.title}
                </Card.Title>
                <Card.Body>
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Text className="pt-3">${product.price}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;