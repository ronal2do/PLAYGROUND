import React, { Component } from 'react';
import Translator from './utils/Translator';

import facebook from './images/facebook-logo-white.svg';
import instagram from './images/instagram-logo-white.svg';

import './Footer.css';

class Footer extends Component {


    renderClose = (language) => {
        if (language === 'en' ) return Translator.english.fechar
        if (language === 'fr') return Translator.french.fechar
        if (language === 'es') return Translator.spanish.fechar
        return Translator.default.fechar
    }

    renderTitle = (language) => {
        if (language === 'en' ) return Translator.english.contato
        if (language === 'fr') return Translator.french.contato
        if (language === 'es') return Translator.spanish.contato
        return Translator.default.contato
    }

    render() {
        const { language } = this.props;

        return (
            <div className="">
                <div className="contact">
                    <div className="Flex">
                        <p>  { this.renderTitle(language) } </p>
                        <span className="Flex-icons">
                            <a href="https://www.facebook.com/kasongoisrael" target="_blank" rel="noopener noreferrer"><img src={facebook} className="Icons" alt="" /></a>
                            <a href="https://www.instagram.com/laviisrael8/" target="_blank" rel="noopener noreferrer"><img src={instagram} className="Icons" alt=""/></a>
                        </span>
                    </div>
                    <p> +55 11 987-052-035 - lavi-kasongo@gmail.com</p>
                </div>
                <br/>
                <small className="Copyright">© Copyright 2017 lavikasongo.com - All Rights Reserved</small>
            </div>
        );
    }
}

export default Footer;
