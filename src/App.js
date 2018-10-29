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
    return (
      <ul>
        {asteroids.map((a) =>
          <Asteroid key={a.id}
            name={a.name}
            hazardous={a.is_potentially_hazardous_asteroid}
            approachDate={a.close_approach_data[0].close_approach_date}
            missDistance={a.close_approach_data[0].miss_distance.kilometers}
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
        <Jumbotron>
          <h1 className="display-3">Near Earth Objects</h1>
          <p className="lead">Space objects and asteroids approaching Earth</p>
          <hr className="my-2" />
        </Jumbotron>
        <Container>
          <Row>
            <Col>{this.displayAsteroids(this.state.asteroids)}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
