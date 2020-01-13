import React from 'react';
import './App.css';
import { Component} from 'react';


const API_KEY = "9e4946e94a47c648ed1160adce216f19";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {};

    this.getWeather();
  }

  getWeather = async () => {
    const api_call = await 
    fetch(`https:/api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}&units=metric`);

    const response = await api_call.json();

    console.log (response);
  }

  updateInput = event => {
    this.setState({
      newCity: event.target.value
    });
  };

  addCityToState = () => {
    const newCity = {
      id: 1 + Math.random(),
      value: this.state.newCity
    };
    console.log('list', this.state)

    this.setState(prevState => ({
      listOfCities: [...prevState.listOfCities, newCity],
      newCity: ""
    }));
  };

  // fetchWeather = () => {

  // }

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
            name="city"
            value={this.state.newCity}
            onChange={this.updateInput}
            />
            <button className="btnFind" onClick={this.getWeather}>
              Find
            </button>
            <h2 className="temp">25&deg;</h2>
  
          </div>
          
        </header>
      </div>
    );
  }

  
}



export default App;
