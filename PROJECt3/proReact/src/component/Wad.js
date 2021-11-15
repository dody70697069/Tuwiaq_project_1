import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav}from'react-bootstrap';
import {Container,Row,Col} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
// import { Card,Button} from "react-bootstrap";
// import img1 from './img/cafe66.jpg';
class Wad extends React.Component{
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

<div class="container" style="margin-top: 13%;">
        <div class="row">
            <p>check</p>
        </div>
        <div class="row" style="height: 50px;">
            <div class="col-6" style="background-color: white;">
                Item
            </div>
            <div class="col-3" style="background-color: white;">
                Quntity
            </div>
            <div class="col-3" style="background-color: white;">
                Price
            </div>
        </div>
        <div class="row">
            <div class="list-group">
            </div>
        </div>
        <div class="row">
            <div class="col-6" style="background-color: white;">
            </div>
            <div class="col-3" style="background-color: white;">
                Total
            </div>
            <div class="col-3" style="background-color: white;">
                224 $
            </div>
        </div>
    </div>
       </div>
    
    export default Wad; 
    