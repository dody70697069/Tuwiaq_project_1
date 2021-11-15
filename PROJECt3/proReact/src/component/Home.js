import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav}from'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import { Card,Button} from "react-bootstrap";
import img1 from './img/cafe66.jpg';
import img2 from './img/cafe88.jpg';
import img3 from './img/cafe88.jpg';
import img4 from './img/cafe88.jpg';
import img5 from './img/cafe88.jpg';
import img6 from './img/cafe88.jpg';
import {Link} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
            <div>

<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">main</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">flower</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
    violet
    </Nav.Link>
  </Nav.Item>
</Nav>
<Card>
    <Card.Img variant="top" src="{img1}" />
    <Card.Body>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

<h1>
Occasions  
</h1>
<Container>
  <Row>
    <Col xs><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img1} />
  <Card.Title>50 R.S </Card.Title>
  <Button variant="light">SAFA</Button>
  <Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>


</Card></Col>
    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={img2} />
<Card.Title>150 R.S </Card.Title>
<Button variant="light"> SNOW WHITE</Button>
<Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>

</Card></Col>
    <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={img3} />
<Card.Title>200 R.S </Card.Title>
<Button variant="light">alis</Button>
<Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>

</Card></Col>
  </Row>
</Container>
<h1>
    Our New
</h1>
<Container>
  <Row>
    <Col xs><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img4} />
  <Card.Title>200 R.S </Card.Title>
  <Button variant="light">SAFA</Button>
  <Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>

</Card></Col>
    <Col xs={{ order: 12 }}><Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={img5} />
<Card.Title>150 R.S </Card.Title>
<Button variant="light">SAHR</Button>
<Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>

</Card></Col>
    <Col xs={{ order: 1 }}><Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={img6} />
<Card.Title>50 R.S </Card.Title>
<Button variant="light">besan</Button>
<Link to="/Message" variant="light"><Button variant="light">selction</Button></Link>

</Card></Col>
  </Row>
</Container>
 

            </div>
        )
    }
}
export default Home;