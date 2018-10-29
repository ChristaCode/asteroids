import React, { Component } from 'react';
import { Table, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Asteroid.css';

class Asteroid extends Component {
  formatName(){
    let name = this.props.name;
    return name.replace(/([\(\)])+/g, '');
  }

  formatDistance(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  formatDiameter(x){
    return x.toFixed(3);
  }

  formatDate(){
    var monthNames = [
      "Jan", "Feb", "March",
      "April", "May", "June", "July",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
  
    let date = this.props.approachDate;
    date = date.split('-');
    return monthNames[date[1]] + ' ' + date[2] + ', ' + date[0];
  }

  formatHazardous(){
    let hazardous = '';
    if(this.props.hazardous){
      hazardous = 'Potentially Hazardous';
    } else {
      hazardous = 'No Threat';
    }
    return hazardous;
  }

  render() {
    return (
      <div className={this.props.hazardous ? "hazardousAsteroid" : "Asteroid"}>
        <p className="asteroidName">{this.formatName()}</p>
        <p className={this.props.hazardous ? "hazardous" : ""}>{this.formatHazardous()}</p>
        <p>Fly by on {this.formatDate()}</p>
        <p>Miss distance of {this.formatDistance(this.props.missDistance)} KM</p>
        <p>Max Diameter of {this.formatDiameter(this.props.maxDiameter)} KM</p>
        <p>Orbiting {this.props.orbiting}</p>
      </div>
    );
  }
}

export default Asteroid;
