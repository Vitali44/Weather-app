import React from 'react';
import './App.css';
import { Component} from 'react';


const API_KEY = "9e4946e94a47c648ed1160adce216f19";

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      newCity:""
    };
  }

  updateInput = event => {
    this.setState({
      newCity: event.target.value
    });
  };

  getWeather = async (e) => {
    // e.preventDefault();
    // const city = e.target.value;
    const api_call = await 
    fetch(`https:/api.openweathermap.org/data/2.5/weather?q=${this.state.newCity}&appid=${API_KEY}&units=metric`);
    // fetch(`https:/api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${API_KEY}&units=metric`);

    const response = await api_call.json();

    console.log (response);
  }


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
