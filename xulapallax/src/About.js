import React, { Component } from 'react';
import Title from './components/Title';
import fotoLavi from './images/lavi.png';
import './About.css';

class About extends Component {
    state = { showVideo: false }

    handleChange = () => {
        this.setState({
            showVideo: !this.state.showVideo
        });
    }

    renderController() {
        const { showVideo } = this.state;

        if (showVideo) return (
          <div className="Controller" style={{ paddingTop: 144 }}>
            <a onClick={ () => this.handleChange() } >text</a>
          </div>
        );

        return (
          <div className="Controller"> 
            <a onClick={ () => this.handleChange() } >video</a>
          </div>
        )
    }

    renderVideo() {
        const { showVideo } = this.state;

        if (showVideo) return (
          <div className="Media" >
            <Title title="Lavi Kasongo" />
            <div>
              <iframe width="640" height="360" src="https://www.youtube.com/embed/xG8EEGsTXkQ" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <img src="http://img.youtube.com/vi/xG8EEGsTXkQ/mqdefault.jpg" alt="" style={{ width: 200, height: 110 }} />
              <img src="http://img.youtube.com/vi/xG8EEGsTXkQ/mqdefault.jpg" alt="" style={{ width: 200, height: 110 }} />
              <img src="http://img.youtube.com/vi/xG8EEGsTXkQ/mqdefault.jpg" alt="" style={{ width: 200, height: 110 }} />
            </div>
          </div> 
        );
       
        return (
          <div className="Media" >
            <Title title="Lavi Kasongo" />
            <div className="Text"> 
              <p>
                O artista plástico Lavi Kasongo Israël é natural da República Democrática do Congo. 
                Frequentou a Académie des Beux-Arts de Kinshasa, capital do país e um dos centros 
                urbanos e artísticos mais importantes da África Central, berço de artistas contemporâneos 
                como Chéri Samba, Chéri Chérin, Jean Nsimba Mika e Pierre Bodo.
              </p>
              <p> 
                Expulso do Congo pela brutal guerra civil que há quase 20 anos assola o país, Lavi 
                é refugiado e vive no Brasil desde 2015. Cursou a Quanta Academia de Artes em São Paulo 
                e participou de exposições individuais e coletivas na Maison de France, no Congo, 
                e na Galeria Olido, Pinacoteca do Estado de São Paulo, Bazar Solidário Adus – Vila Madalena, 
                Festa Mulitcultural Adus/Atados – Colégio Santa Cruz e Espaço de Arte Michigan.
              </p>
              <p>
                Sua produção atual incluiu paisagens, retratos e telas abstratas em óleo e acrílico com inspiração na África, 
                nas ruas de Kinshasa e em suas novas experiências no Brasil.
              </p>
            </div>
          </div>
        );
    }

    render() {

        return (
          <div className="App">
            <div className="container">
              <div className="BoxHeader" >
              <img src={fotoLavi} alt="Foto do lavi" className="lavi-image"/>
                <div />
              </div>       
              <div className="Box"> 
                { this.renderController() }
                { this.renderVideo() }
              </div>
              
            </div>
          </div>
        );
    }
}

export default About;
