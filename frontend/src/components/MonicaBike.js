import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
function MonicaBike() {
    const brand = "VAN RYSEL";
    const model = "ACE 11V FULCRUM R ZERO ROJO";

    return (

        <Card border="primary" className="text-center" style={{ width: '25rem' }}>
            <Card.Header>Brand: {brand}</Card.Header>
            <Card.Img variant="top" src="https://contents.mediadecathlon.com/p1867539/k$cd0b0b0139000ebea496aed0ed900981/sq/BICICLETA+DE+CARRETERA+CARBONO+EDR+CF+SHIMANO+DURA+ACE+11V+FULCRUM+R+ZERO+ROJO.webp?f=1000x1000" />
            <Card.Body>
                <Card.Title>Model: {model}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default MonicaBike;


