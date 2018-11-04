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
    var month = ("0" + (d.getMonth() + 1)).slice(-2);
    var date = ("0" + (d.getDate() + 1)).slice(-2);
    var promise = getAsteroids(d.getFullYear() + '-' + month + '-' + date);
    promise.then((asteroids) => 
      this.setState({ asteroids }));
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
    let harzardousDesc = '*A potentially hazardous object (PHO) is a near-Earth object – either an asteroid or a comet – with an orbit that can make exceptionally close approaches to the Earth and large enough to cause significant regional damage in the event of impact.';
    let display = 'Error';

    if ( !this.state.asteroids ) { // if asteroids array is empty
      display = <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
    } else if (this.state.asteroids[0] === "Error") { // if error is returned from api call
      display = this.state.asteroids[1];
    } else {
      display = this.displayAsteroids(this.state.asteroids); // if asteroids array is populated and no error returned
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
      <div class='sky'>
        <div class='stars'>
          <p> { display } </p>
        </div>
      </div>
      <div className="notes">{harzardousDesc}</div>
    </div>
    );
  }    
}

export default App;
