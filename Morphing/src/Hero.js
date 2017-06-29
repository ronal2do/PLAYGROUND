import React, { Component } from 'react';
import { style } from 'glamor';
import Parallax from './utils/Parallax';

import layer6 from './images/layer6.png';
import layer5 from './images/layer5.png';
import layer4 from './images/layer4.png';
import layer3 from './images/layer3.png';
import layer2 from './images/layer2.png';
import signature from './images/signature.svg';
import instagram from './images/instagram-logo.svg';
import facebook from './images/facebook-logo.svg';

const ct = style({
    display: 'flex',
    justifyContent: 'flex-end',
})

class Hero extends Component {

    componentDidMount() {
        this.parallax();
    }
    
    parallax() {
        const scene = document.getElementById('scene')

        new Parallax(scene);
    }

    render() {
        return (
        <div id="container" className="imagemContainer">
            <ul id="scene" className="scene">
                <li className="layer" data-depth="0.10"><img src={layer6} alt=""/></li>
                <li className="layer" data-depth="0.25"><img src={layer5} alt=""/></li>
                <li className="layer" data-depth="0.50"><img src={layer4} alt=""/></li>
                <li className="layer" data-depth="0.75"><img src={layer3} alt=""/></li>
                <li className="layer" data-depth="1"><img src={layer2} alt=""/></li>
            </ul>
            <div>
                <h1><img src={signature} alt="Lavi Kasongo" />
                </h1>
                <h1 {...ct}>
                    <a href="https://www.facebook.com/kasongoisrael" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Lavi Kasongo" className="Icons" /></a>
                    <a href="https://www.instagram.com/laviisrael8/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Lavi Kasongo" className="Icons" /></a>
                </h1>
            </div>
          </div>
        );
    }
}

export default Hero;
