import React, { Component } from 'react';
import { Table, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Asteroid.css';

class Asteroid extends Component {
  render() {
    let hazardous = '';
    if(this.props.hazardous){
      hazardous = 'Yes';
    } else {
      hazardous = 'No';
    }
  
    return (

      <div className="Asteroid">
        <Table responsive>
          <tbody>
            <tr>
              <th>Name</th>
              <td>{this.props.name} </td>
            </tr>
            <tr>
              <th>Hazardous</th>
              <td>{hazardous} </td>
            </tr>
            <tr>
              <th>Approach Date</th>
              <td>{this.props.approachDate} </td>
            </tr>
            <tr>
              <th>Miss By (km)</th>
              <td>{this.props.missDistance} </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Asteroid;
