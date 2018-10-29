import React, { Component } from 'react';
import logo from './logo.svg';
import { getAsteroids } from './Routes.js';
import Asteroid from './Asteroid';
import { Jumbotron, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroids: null
    };
  }

  componentDidMount() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var promise = getAsteroids(d.getFullYear() + '-' + month + '-' + d.getDate());
    promise.then((asteroids) => this.setState({ asteroids }));
  }

  displayAsteroids(asteroids) {
    console.log(this.state.asteroids);
    return (
      <ul>
        {asteroids.map((a) =>
          <Asteroid key={a.id}
            name={a.name}
            hazardous={a.is_potentially_hazardous_asteroid}
            approachDate={a.close_approach_data[0].close_approach_date}
            missDistance={a.close_approach_data[0].miss_distance.kilometers}
            maxDiameter={a.estimated_diameter.kilometers.estimated_diameter_max}
            orbiting={a.close_approach_data[0].orbiting_body}
            velocity={a.close_approach_data[0].relative_velocity.kilometers_per_second}
          />
        )}
      </ul>
    );
  }

  render() {
    if (!this.state.asteroids) {
      return (
        <div className="App">
          <p>Loading</p>
        </div>
      );
    }
    return (
      <div className="App">
        <Jumbotron className="header">
          <h1 className="display-3">Near Earth Encounters</h1>
          <p className="lead">Space objects and asteroids approaching Earth</p>
          <p className="source">Updated daily from <a href="https://ssd.jpl.nasa.gov/sbdb.cgi">NASA</a></p>
          <hr className="my-2" />
        </Jumbotron>
        <p> Avg distance to sun: 149,600,000 km </p>
        <p> Avg Distance to moon: 384,400 km</p>
        <div className="List">
          {this.displayAsteroids(this.state.asteroids)} 
        </div>
      </div>
    );
  }
}

export default App;
