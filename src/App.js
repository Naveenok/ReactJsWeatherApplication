import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';


const API_KEY = "a26bb5958fcdbfcc2ef72c49cdb6d134";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();  
    const city=e.target.elements.city.value;  
    const country=e.target.elements.country.value;  
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div>
        <Title />
        <Form weather={this.getWeather} />
        <Weather />

      </div>


    );

  }

}

export default App;
