import React, {Component} from 'react';

import axios from 'axios';
import _ from 'underscore';

class Astronauts extends Component {
  constructor() {
    super();
    this.state = {
      population: 0,
      people: [],
    }
    setInterval(() => {this.fetchAstronauts();}, 5000);
  }

  fetchAstronauts(){
    const openNotifyURL = 'http://api.open-notify.org/astros.json'
    axios(openNotifyURL).then( (response)=>{
      const number = response.data.number;
      const people = response.data.people
      this.setState({population: number, people: people});
    });
  };

  render() {
    return (
      <div>
        <h2>Number of Astronauts in Space: {this.state.population}</h2>
        {this.state.people.map(person => {
          return <h3>{person.name} is on {person.craft}</h3>
        })}
      </div>
    )
  }
}

export default Astronauts;
