import React from "react";
import "./App.css";
import { Component } from "react";

const API_KEY = "9e4946e94a47c648ed1160adce216f19";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      newCity: "",
      temp: undefined,
      city: undefined,
      country: undefined,
      error: undefined
    };
  }

  updateInput = event => {
    this.setState({
      newCity: event.target.value
    });
  };

  // getWeather = async e => {
  //   this.setState({ loading: true });
  //   if (this.state.newCity) {
  //     const api_call = await fetch(
  //       `https:/api.openweathermap.org/data/2.5/weather?q=${this.state.newCity}&appid=${API_KEY}&units=metric`
  //     );
  //     const response = api_call.json();
  //     console.log(response);
  //     this.setState({
  //       loading: false,
  //       temp: response.main.temp,
  //       city: response.name,
  //       country: response.sys.country,
  //       error: ""
  //     });
  //   } else {
  //     this.setState({
  //       loading: false,
  //       error: "Please enter a city name"
  //     });
  //   }
  // };

  getWeatherPromises = () => {
    this.setState({ loading: true });
    return fetch(`https:/api.openweathermap.org/data/2.5/weather?q=${this.state.newCity}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => console.log(data))
      .then(console.log(this.state))
      .then(data => this.setState({
        loading: false,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country
      }))
      .catch(error => {console.log(error)});
         
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="appsField">
            <h2 className="title">Wheather</h2>
            <input
              className="cityInput"
              type="text"
              placeholder="City name"
              name="cityName"
              value={this.state.newCity}
              onChange={this.updateInput}
            />
            {/* <button className="btnFind" onClick={this.getWeather}> */}
            <button className="btnFind" onClick={this.getWeatherPromises}>
              Find
            </button>
            <div>
              {this.state.loading && (
                <div className="lds-facebook"><div></div><div></div><div></div></div>
               )} 
            </div>
            <div>
              {this.state.temp && (
                <div>
                  <h2>{this.state.temp}&deg;</h2>
                  <h3>
                    {this.state.city}, {this.state.country}
                  </h3>
                </div>
              )}
            </div>
            {/* <h6>{this.state.error}</h6> */}
            <h6>{this.state.error}</h6>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
