import React, { Component } from 'react';
import { Table, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Asteroid.css';

class Asteroid extends Component {
  formatName(){
    let name = this.props.name;
    return name.replace(/([\(\)])+/g, '');
  }

  formatMeasurement(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  formatHazardous(){
    let hazardous = '';
    if(this.props.hazardous){
      hazardous = 'Hazardous';
    } else {
      hazardous = 'No Danger';
    }
    return hazardous;
  }

  render() {
    return (
      <div className="Asteroid">
        <p className="asteroidName">{this.formatName()}</p>
        <p>{this.formatHazardous()}</p>
        <p>Approaching {this.props.approachDate}</p>
        <p>Missing Earth by {this.formatMeasurement(this.props.missDistance)} KM</p>
      </div>
    );
  }
}

export default Asteroid;
