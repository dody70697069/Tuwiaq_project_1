import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav}from'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import { Card,Button} from "react-bootstrap";
import img1 from './img/cafe66.jpg';
// import img2 from './img/cafe88.jpg';
// import img3 from './img/cafe88.jpg';
// import {Link} from "react-router-dom";
class Message extends React.Component{
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

    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>Add message</Card.Title>
          <Card.Text>
          <Button variant="secondary">Add</Button>{' '}
          <Link to="/Wad" variant="light"><Button variant="light">Add</Button></Link>
          <Row>
    <Form.Label column lg={2}>
      Here
    </Form.Label>
    <Col>
      <Form.Control type="text" placeholder="Normal text" />
    </Col>
  </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


       </div>
)}
      }
   export default Message; 