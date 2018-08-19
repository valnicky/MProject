import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>MADRID</h1>
          <h2 className="App-title">My Neighborhood</h2>
          <div className='search-filter'>
            <input
                type='text'
                placeholder='Search here'
                aria-label = "Enter location"
                /*onChange={(event) => props.searchQuery(event.target.value)}*/
            />
          </div>
        </header>
        <Map/>
      </div>
    );
  }
}

export default App; 