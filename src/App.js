import React, { Component } from 'react';
import logo from './logo.svg';
import { getAsteroids } from './Routes.js';
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

displayAsteroids() {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );



  console.log(asteroids);
  for(var i = 0; i < asteroids.length; i++){
    console.log('name: ' + asteroids[i].name);
    console.log('potentially hazardous: ' + asteroids[i].is_potentially_hazardous_asteroid);
    console.log('close approach date: ' + asteroids[i].close_approach_data[0].close_approach_date);
    console.log('miss distance: ' + asteroids[i].close_approach_data[0].miss_distance.kilometers + 'km');
  }
}

  render() {
    if(this.state.asteroids){
      displayAsteroids();
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
      </div>
    );
  }
}

export default App;
