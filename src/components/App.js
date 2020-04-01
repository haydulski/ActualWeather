import React, { Component } from 'react';
import Weather from './Weather'
import './App.css';

const apiKey = 'a971a0d5904a806c8727838afc5882c5'
class App extends Component {
  state = {
    city1: { id: "London", temp: "5", press: "1005", wind: "10" },
    city2: { id: "Berlin", temp: "", press: "", wind: "" },
    city3: { id: "Warsaw", temp: "", press: "", wind: "" },

  }
  componentDidMount() {
    for (let i = 0; i < 3; i++) {

      let currentCity = this.state.city1.id;
      if (i === 1) currentCity = this.state.city2.id;
      if (i === 2) currentCity = this.state.city3.id;

      console.log(currentCity);
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&APPID=${apiKey}&units=metric`)
        .then(response => {
          if (response.ok) { return response }
          throw Error("błędny link")
        })
        .then(response => response.json())
        .then(data => {
          if (i === 0) {
            let newcity = this.state.city1
            newcity.temp = data.main.temp;
            newcity.press = data.main.pressure;
            newcity.wind = data.wind.speed;
            // console.log(newcity);
            this.setState({
              city1: newcity
            })
          }
          if (i === 1) {
            let newcity = this.state.city2
            newcity.temp = data.main.temp;
            newcity.press = data.main.pressure;
            newcity.wind = data.wind.speed;
            // console.log(newcity);
            this.setState({
              city2: newcity
            })
          }
          if (i === 2) {
            let newcity = this.state.city3
            newcity.temp = data.main.temp;
            newcity.press = data.main.pressure;
            newcity.wind = data.wind.speed;
            // console.log(newcity);
            this.setState({
              city3: newcity
            })
          }
        })
        .catch(err => console.log(err))
    }
  }
  render() {
    console.log(this.state.length);
    return (
      <>
        <h1>Actual weather</h1>
        <div className="app">
          <Weather data={this.state.city1} />
          <Weather data={this.state.city2} />
          <Weather data={this.state.city3} />
        </div>
      </>
    );
  }
}

export default App;
