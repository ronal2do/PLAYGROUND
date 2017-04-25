import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import flags from './images/flags.png';
import './App.css';

class App extends Component {
    render() {
        return (
          <div>
            <div className="nav">
              <div className="container">
                <img src={flags} alt="" className="flags"/>
              </div>
            </div>
            <About />
            <Work />
          </div>
        );
    }
}

export default App;
