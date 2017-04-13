import React, { Component } from 'react';
import Search from './Search';
import logo from './logo.svg';
import './App.css';

const searchTrendings = [
  { id: 1, query: 'broken'},
  { id: 2, query: 'lost'},
  { id: 3, query: 'good'},
  { id: 4, query: 'red'},
  { id: 5, query: 'funny'},
  { id: 6, query: 'hilarious'},
  { id: 7, query: 'catgif'},
  { id: 8, query: 'blue'},
  { id: 9, query: 'nono'},
  { id: 10, query: 'why'},
  { id: 11, query: 'yes'},
  { id: 12, query: 'yesyes'},
  { id: 13, query: 'aliens'},
  { id: 14, query: 'green'},
  { id: 15, query: 'dron'},
]

class App extends Component {
  render() {
    return (
      <Search
        lastestSearchesTitle="Latest searches"
        lastestSearches={searchTrendings}
        searchTrendingsTitle="Search Trendings"
        searchTrendings={searchTrendings}
        >
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Search>
    );
  }
}

export default App;
