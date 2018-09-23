// Import React from package.json
import React from "react";

// Import the files we made in the components folder
import Titles from "./components/Titles.js";
import Form from "./components/Form.js";
import Weather from "./components/Weather.js";

const API_KEY = "8446956e3b7e4e62dd3f86b441c62154";

// initiate component (we can call App whatever we want)
class App extends React.Component {
  // render is a built-in react component and returns jsx, which looks like HTML
  // everything we want to return has to be within a single <div>

  // Making a call to a URL
  getWeather = async () => {
    // FETCH    
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/
      weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);

    // converting to JSON (better than stringify or parse)
    const data = await api_call.json();
  }

  render() {
    return (
        <div>
          <Titles />
          <Form />
          <Weather />
        </div>
      );
  }
};

export default App;