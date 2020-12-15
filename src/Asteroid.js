import React, { Component } from 'react';
import { Table, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Asteroid.css';

class Asteroid extends Component {
  formatName(){
    let name = this.props.name;
    return name.replace(/([\(\)])+/g, '');
  }

  formatDistance(x){
    x = parseFloat(x);
    return x.toFixed(2);
  }

  formatDiameter(x){
    return x.toFixed(3);
  }

  formatVelocity(x){
    return x.substring(0,5);
  }

  formatDate(){
    var monthNames = new Map();
    
    monthNames.set('01', 'Jan');
    monthNames.set('02', 'Feb');
    monthNames.set('03', 'March');
    monthNames.set('04', 'April');
    monthNames.set('05', 'May');
    monthNames.set('06', 'June');
    monthNames.set('07', 'July');
    monthNames.set('08', 'Aug');
    monthNames.set('09', 'Sep');
    monthNames.set('10', 'Oct');
    monthNames.set('11', 'Nov');
    monthNames.set('12', 'Dec');

    let date = this.props.approachDate;
    date = date.split('-');
    console.log(date);
    return monthNames.get(date[1]) + ' ' + date[2] + ', ' + date[0];
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
      <div className="asteroidWrapper">
        <p className="asteroidName">{this.formatName()}</p>
        <div className={this.props.hazardous ? "hazardousAsteroid" : "Asteroid"}>
          <p className={this.props.hazardous ? "hazardous" : ""}>{this.formatHazardous()}</p>
          <p>{this.formatDiameter(this.props.maxDiameter)}km wide</p>
          <p>Miss by {this.formatDistance(this.props.missDistance)}km</p>
          <p>Travelling {this.formatVelocity(this.props.velocity)}km per second</p>
          <p>Pass by {this.formatDate()}</p>
          <p>Orbiting {this.props.orbiting}</p>
        </div>
      </div>
    );
  }
}

export default Asteroid;
