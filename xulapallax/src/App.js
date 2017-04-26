import React, { Component } from 'react';
import About from './About';
import Work from './Work';
import flags from './images/flags.png';
import menu from './images/menu@2x.png';
import './App.css';

class App extends Component {
    state = { menu: false, cart: false }

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

    render() {
        return (
          <div>
            <div className="nav">
              <div className="container">
                <img src={menu} alt="" className="menu" onClick={() => this.openMenu() }/>
                
                <img src={flags} alt="" className="flags" onClick={() => this.openCart() }/>
                { this.state.menu &&  
                  <div className="menuBar"> 
                    <br/>
                    <h1 className="menuItem" ><a href="#" className="menuItem">Home</a></h1>
                    <h1 className="menuItem" ><a href="#" className="menuItem">Home</a></h1>
                    <h1 className="menuItem" ><a href="#" className="menuItem">Home</a></h1>
                  </div> 
                }
              </div>
              { this.state.cart && 
                <div className="cartBar">
                  Cart
                </div> }
              { this.state.cart &&  <div className="overlay" onClick={() => this.close() } ></div> }
            </div>
            <About />
            <Work />
          </div>
        );
    }
}

export default App;
