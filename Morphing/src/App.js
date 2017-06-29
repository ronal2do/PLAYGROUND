import React, { Component } from 'react';

import { Link, Element, Events, scrollSpy } from 'react-scroll';
import Translator from './utils/Translator';

import Background from './Background';
import Hero from './Hero';
import About from './About';
import Video from './Video';
import Work from './Work';
import Footer from './Footer';

import flags from './images/flags.png';

import './App.css';

class App extends Component {
    state = { menu: false, cart: false, language: 'pt-br' }

    componentDidMount() {
      Events.scrollEvent.register('begin');
      Events.scrollEvent.register('end');
      scrollSpy.update();
    }

    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }

    openMenu = () => {
      this.setState(prevState => ({
        menu: !prevState.menu,
        cart: false
      }));
    } 

    close = () => {
      this.setState({ menu: false });
      this.setState({ cart: false });
    } 

    openCart = () => {
      this.setState(prevState => ({
        cart: !prevState.cart,
        menu: false
      }));
    } 

    closeCart = () => {
      this.setState({ cart: false });
    }
    
    setPortuguese = () => {
      this.setState({ language: 'pt-br' })
    }

    setFrench = () => {
      this.setState({ language: 'fr' })
    }

    setEnglish = () => {
      this.setState({ language: 'en' })
    }

    setSpanish = () => {
      this.setState({ language: 'es' })
    }

    renderContact = (language) => {
      if (language === 'en' ) return Translator.english.contato
      if (language === 'fr') return Translator.french.contato
      if (language === 'es') return Translator.spanish.contato
      return Translator.default.contato
    }

    renderAbout = (language) => {
      if (language === 'en' ) return Translator.english.sobre
      if (language === 'fr') return Translator.french.sobre
      if (language === 'es') return Translator.spanish.sobre
      return Translator.default.sobre
    }

    renderMovie = (language) => {
      if (language === 'en' ) return Translator.english.movie
      if (language === 'fr') return Translator.french.movie
      if (language === 'es') return Translator.spanish.movie
      return Translator.default.movie
    }

    renderTitle = (language) => {
      if (language === 'en' ) return Translator.english.trabalhos
      if (language === 'fr') return Translator.french.trabalhos
      if (language === 'es') return Translator.spanish.trabalhos
      return Translator.default.trabalhos
    }

    render() {
      const { menu, cart, language } = this.state

        return (
          <Background>
            <div className="nav">
              <Element name="home"></Element>
              <div className="container flex">
                <div>
                  {/*<img src={menuImg} alt="" className="menu" onClick={() => this.openMenu() }/>*/}
                  <div className={`menu ${menu && 'active'}`} onClick={() => this.openMenu() }>
                    <span className="before"></span>
                    <span className="main"></span>
                    <span className="after"></span>
                  </div>

                { menu &&  
                  <div className="menuBar"> 
                    <br/>
                    <Link className="menuItem" to="home" spy={true} smooth={true} duration={800} onClick={() => this.close() }>Home</Link><br/>
                    <Link className="menuItem" to="about" spy={true} smooth={true} duration={800} onClick={() => this.close() }>{ this.renderAbout(language) }</Link><br/>
                    <Link className="menuItem" to="video" spy={true} smooth={true} duration={800} onClick={() => this.close() }>{ this.renderMovie(language) }</Link><br/>
                    <Link className="menuItem" to="work" spy={true} smooth={true} duration={800} onClick={() => this.close() }>{ this.renderTitle(language) }</Link><br/>
                    <Link className="menuItem" to="footer" spy={true} smooth={true} duration={800} onClick={() => this.close() }>{ this.renderContact(language) }</Link><br/>
                  </div> 
                }
                </div>
                
                <div className="flagsContainer">
                  <div style={{ backgroundImage: `url('${flags}')` }} alt="Português" className={`flags ${language === 'pt-br' && 'active'}`} onClick={() => this.setPortuguese() }/>
                  <div style={{ backgroundImage: `url('${flags}')` }} alt="French" className={`flags ${language === 'fr' && 'active'}`} onClick={() => this.setFrench() }/>
                  <div style={{ backgroundImage: `url('${flags}')` }} alt="English" className={`flags ${language === 'en' && 'active'}`} onClick={() => this.setEnglish() }/>
                  <div style={{ backgroundImage: `url('${flags}')` }} alt="Spanish" className={`flags ${language === 'es' && 'active'}`} onClick={() => this.setSpanish() }/>
                  {/* <div style={{ backgroundImage: `url('${flags}')` }} alt="Cart" className="flags" onClick={() => this.openCart() }/> */}
                </div>
                
              </div>
              { cart && 
                <div className="cartBar">
                  Cart
                </div> }
              { cart &&  <div className="overlay" onClick={() => this.close() } ></div> }
            </div>

            <div className="content-wrap">
                <Element name="hero">
                  <Hero language={language}/>
                </Element>
            </div>

              <div className="content-wrap">
                  <Element name="video">
                    <Video language={language}/>
                  </Element>
              </div>

              <div className="content-wrap">
                  <Element name="work">
                    <About language={language}/>
                  </Element>
              </div>

              <div className="content-wrap">
                  <Element name="work">
                    <Work language={language}/>
                  </Element>
              </div>

              <section className="content content--related">
                <Element name="footer">
                  <Footer language={language}/>
                </Element>
              </section>
          </Background>
        );
    }
}

export default App;
