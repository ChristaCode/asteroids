import React, { Component } from 'react';
import logo from './logo.svg';
import { getAsteroids } from './Routes.js';
import Asteroid from './Asteroid';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asteroids: null
    };
  }

componentDidMount(){
  var d = new Date();
  var month = d.getMonth()+1;
  var promise = getAsteroids(d.getFullYear()+'-'+month+'-'+d.getDate());
  promise.then((asteroids) =>  this.setState({asteroids}));
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
    if(!this.state.asteroids){
      return(
        <div className="App">
          <p>Loading</p>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
        <ul>
          {this.displayAsteroids(this.state.asteroids)}
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
