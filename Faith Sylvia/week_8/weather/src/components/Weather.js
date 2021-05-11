import React, { Component } from 'react';

import axios from 'axios';
import _ from 'underscore'

class Weather extends Component {

  constructor() {
    super();
    this.state = {
      weather: '',
    }
  }

  fetchWeather (q) {

    const query = 'London'

    const weatherURL = `api.openweathermap.org/data/2.5/weather?q=${query}&appid=87f3530b034ce83f07479771285f8bdf`

    axios(weatherURL).then((results) => {
      console.log(results);
    })

  }

  render(){
    return (
      <div>Hello</div>
    )
  }

}



export default Weather;
