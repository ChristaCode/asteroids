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

  formatVelocity(x){
    return x.substring(0,5);
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
      hazardous = 'Hazardous';
    } else if(!this.props.hazardous){
      hazardous = 'No Threat';
    } else {
      hazardous = '';
    }
    return hazardous;
  }

  render() {
    return (
      <div className={this.props.hazardous ? "hazardousAsteroid" : "Asteroid"}>
        {/* <p className="asteroidName">{this.formatName()}</p> */}
        <p className={this.props.hazardous ? "hazardous" : ""}>{this.formatHazardous()}</p>
        <p>{this.formatDiameter(this.props.maxDiameter)}km wide</p>
        <p>Miss by {this.formatDistance(this.props.missDistance)}km</p>
        <p>Travelling {this.formatVelocity(this.props.velocity)}km per second</p>
        <p>{this.formatDate()}</p>
        <p>Orbiting {this.props.orbiting}</p>
      </div>
    );
  }
}

export default Asteroid;
