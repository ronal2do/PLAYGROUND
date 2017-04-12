import React, { Component } from 'react';

// import Parallax from 'expose-loader?./parallax.js';
import Parallax from './parallax.js';

import layer1 from './images/layer1.png';
import layer2 from './images/layer2.png';
import layer3 from './images/layer3.png';
import layer4 from './images/layer4.png';
import layer5 from './images/layer5.png';
import layer6 from './images/layer6.png';

import './App.css';
import './styles.css';

const Layers = [
  {id: 1, depth: 1.00, image: layer1},
  {id: 2, depth: 0.80, image: layer2},
  {id: 3, depth: 0.60, image: layer3},
  {id: 4, depth: 0.40, image: layer4},
  {id: 5, depth: 0.20, image: layer5},
  {id: 6, depth: 0.00, image: layer6},
]

class App extends Component {

  componentDidMount() {
    const scene = document.getElementById('scene');
    const layer = document.getElementsByClassName('layer');
    const xulapallax = new Parallax(scene);

    console.log(`Scene ====> ${scene}`);
    console.log(`layer ====> ${layer}`);
    console.log(`xulapallax ====> ${xulapallax}`);
    console.log(`Parallax ====> ${Parallax}`);
  }

  render() {

    const ListLayers = Layers.map((layer) =>
        <li key={layer.id} className="layer" data-depth={layer.depth}>
          <img src={layer.image} alt={layer.image} />
        </li>
    );

    const ul =
      <ul id="scene" className="scene">
        { ListLayers }
      </ul>


    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="container" className="container">
        { ul }
        </div>
      </div>
    );
  }
}

export default App;
