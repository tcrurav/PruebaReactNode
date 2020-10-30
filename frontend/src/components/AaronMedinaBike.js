import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import 'bootstrap/dist/css/bootstrap.min.css';


function AaronMedinaBike() {
  const myBike =  {
    brand: "Orbea",
    model: "OIZ",
    image: "https://www.bikephilosophy.es/5982-superlarge_default/orbea-oiz-29-m30-2020.jpg"
  };

    return (
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src= {myBike.image} />
        <Card.Body>
        </Card.Body>
        <ListGroup >
          <ListGroupItem>Brand: {myBike.brand}</ListGroupItem>
          <ListGroupItem>Model: {myBike.model}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  
}

export default AaronMedinaBike;
