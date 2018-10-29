import React, { Component } from 'react';
import './App.css';

class Asteroid extends Component {

  render() {
    return (
      <div className="Asteroid">
        <p> {this.props.name} </p>
        <p> {this.props.hazardous} </p>
        <p> {this.props.approachDate} </p>
        <p> {this.props.missDistance} </p>
      </div>
    );
  }
}

export default Asteroid;
