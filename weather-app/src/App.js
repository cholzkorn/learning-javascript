// Import React from package.json
import React from "react";

// Import the files we made in the components folder
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "8446956e3b7e4e62dd3f86b441c62154";

// initiate component (we can call App whatever we want)
class App extends React.Component {

  // initialize a state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // Making a call to a URL
  getWeather = async (e) => {
    // e.preventDefault(); prevents page refresh
    e.preventDefault();

    // get city and country name from Form.js
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // FETCH    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

    // converting to JSON (better than stringify or parse)
    const data = await api_call.json();

    // error handling
    if (city && country){
      console.log(data);

    // set values of the state (see values of API in console)
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }

    else {
        this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
    });
    }
  }
  
  // render is a built-in react component and returns jsx, which looks like HTML
  // everything we want to return has to be within a single <div>

  // the terms after Form and Weather are props
  render() {
    return (
        <div>
          <Titles />
          <Form getWeather={this.getWeather}/>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      );
  }
};

export default App;