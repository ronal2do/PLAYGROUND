import React, { Component } from 'react';
import { style } from 'glamor';
import Translator from './utils/Translator';
import Title from './components/Title';
import fotoLavi from './images/lavi.png';
import clock from './images/history-clock-button.svg';
// eslint-disable-next-line
import movie from './images/movie.svg';
import './About.css';

const ct = style({
    paddingTop: 246,
    '@media (max-width: 768px)' : {
        paddingTop: 0,
    }
})

class About extends Component {
    state = { showVideo: true }

    handleChange = () => {
        this.setState({
            showVideo: !this.state.showVideo
        });
    }

    renderController() {
        const { showVideo } = this.state;

        if (showVideo) return (
          <div className="Controller" {...ct}>
            <a onClick={ () => this.handleChange() } >
              <img src={clock} className="Icons" alt=""/>
            </a>
          </div>
        );

        return (
          <div className="Controller" > 
            <a onClick={ () => this.handleChange() } >
              <img src={movie} className="Icons" alt=""/>   
            </a>
          </div>
        )
    }

    renderVideo() {
        const { showVideo } = this.state;
        const { language } = this.props;
        
        if (showVideo) return (
          <div className="Media" >
            <Title title="Lavi Kasongo" />
            <div className="videoWrapper">
              <iframe className="iframe" title="video" src="https://www.youtube.com/embed/6cVgA0NWlYs" allowfullscreen />
            </div>
          </div> 
        );
       
        return (
          <div className="Media" >
            <Title title="Lavi Kasongo" />
            <div className="Text"> 
              <p>
                {language === 'pt-br' && Translator.default.sobrep1}
                {language === 'en' && Translator.english.sobrep1}
                {language === 'fr' && Translator.french.sobrep1}
                {language === 'es' && Translator.spanish.sobrep1}
              </p>
              <p>
                {language === 'pt-br' && Translator.default.sobrep2}
                {language === 'en' && Translator.english.sobrep2}
                {language === 'fr' && Translator.french.sobrep2}
                {language === 'es' && Translator.spanish.sobrep2}
              </p>
              <p>
                {language === 'pt-br' && Translator.default.sobrep3}
                {language === 'en' && Translator.english.sobrep3}
                {language === 'fr' && Translator.french.sobrep3}
                {language === 'es' && Translator.spanish.sobrep3}
              </p>
            </div>
          </div>
        );
    }

    render() {

        return (
          <div className="container">
            <div className="BoxHeader" >
              <img src={fotoLavi} alt="Foto do lavi" className="lavi-image"/>
              <div />
            </div>       
            <div className="Box"> 
            { this.renderVideo() }
            </div>          
          </div>
        );
    }
}

export default About;
