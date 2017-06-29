import React, { Component } from 'react';
import Translator from './utils/Translator';
import Title from './components/Title';

import './About.css';

class About extends Component {

    renderVideo() {
        const { language } = this.props;
        
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
                <div />
              </div>       
              <div className="Box"> 
              <div></div>
                { this.renderVideo() }
              </div>
          </div>
        );
    }
}

export default About;
