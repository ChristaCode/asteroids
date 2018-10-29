import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Asteroid.css';

class Asteroid extends Component {
  render() {
    let hazardous = '';
    if(this.props.hazardous){
      hazardous = 'true';
    } else {
      hazardous = 'false';
    }
  
    return (
      <div className="Asteroid">
        <p> Name: {this.props.name} </p>
        <p> Is Hazardous: {hazardous} </p>
        <p> Approach Date: {this.props.approachDate} </p>
        <p> Miss Distance: {this.props.missDistance} </p>
      </div>
    );
  }
}

export default Asteroid;
