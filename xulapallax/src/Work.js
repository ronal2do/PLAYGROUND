import React, { Component } from 'react';
import Title from './components/Title';
import ink from './images/tinta2.png';
import Lavi01 from './images/telas/Lavi01.jpg'; 
import Lavi02 from './images/telas/Lavi02.jpg';
import Lavi03 from './images/telas/Lavi03.jpg'; 
import Lavi04 from './images/telas/Lavi04.jpg'; 
import Lavi05 from './images/telas/Lavi05.jpg'; 
import Lavi06 from './images/telas/Lavi06.jpg'; 
import Lavi07 from './images/telas/Lavi07.jpg'; 
import Lavi08 from './images/telas/Lavi08.jpg'; 
import Lavi09 from './images/telas/Lavi09.jpg'; 
import Lavi10 from './images/telas/Lavi10.jpg'; 
import Lavi11 from './images/telas/Lavi11.jpg'; 
import './Work.css';

class Work extends Component {
    state = { modal: false, works: [
        {
            '_id': '58ff8297e4fc7106404cb62f',
            'isActive': false,
            'price': '$3,721.50',
            'picture': Lavi01,
            'age': 22,
            'dimension': 220,
            'name': 'Shana Langley',
            'gender': 'female',
            'technique': 'BLURRYBUS',
            'about': 'Fugiat dolor mollit tempor incididunt anim nisi commodo ut culpa labore cupidatat id. Ad pariatur aute veniam et quis sunt in eu do adipisicing occaecat in adipisicing. Ex laborum consequat eiusmod aute in proident. Eu esse in aliqua esse adipisicing veniam aliquip. Culpa duis proident sit sunt tempor sint commodo dolore incididunt.\r\n',
            'registered': '2017-03-14T11:56:52 +03:00'
        },
        {
            '_id': '58ff8297e4fc7106404cb73f',
            'isActive': false,
            'price': '$3,721.50',
            'picture': Lavi02,
            'age': 22,
            'dimension': 220,
            'name': 'Shana Langley',
            'gender': 'female',
            'technique': 'BLURRYBUS',
            'about': 'Fugiat dolor mollit tempor incididunt anim nisi commodo ut culpa labore cupidatat id. Ad pariatur aute veniam et quis sunt in eu do adipisicing occaecat in adipisicing. Ex laborum consequat eiusmod aute in proident. Eu esse in aliqua esse adipisicing veniam aliquip. Culpa duis proident sit sunt tempor sint commodo dolore incididunt.\r\n',
            'registered': '2017-03-14T11:56:52 +03:00'
        },
        {
            '_id': '58ff8297b4130a0837917607',
            'isActive': false,
            'price': '$2,795.56',
            'picture': Lavi03,
            'age': 21,
            'dimension': 44,
            'name': 'Joyner Dodson',
            'gender': 'male',
            'technique': 'VIRXO',
            'about': 'Incididunt commodo ea ad nulla. Qui enim incididunt cillum nostrud mollit aute elit dolore ex. Ex eiusmod tempor ut commodo incididunt. Nostrud voluptate exercitation nulla laborum veniam do do ex proident voluptate. Eu consequat commodo mollit cupidatat labore irure exercitation velit fugiat id pariatur excepteur consequat mollit. Ex non mollit sunt esse culpa eu sunt cillum.\r\n',
            'registered': '2016-06-05T08:58:41 +03:00'
        },
        {
            '_id': '58ff82979731f0f3fbaa9503',
            'isActive': false,
            'price': '$1,035.01',
            'picture': Lavi04,
            'age': 35,
            'dimension': 147,
            'name': 'Berg Santiago',
            'gender': 'male',
            'technique': 'ZENTIX',
            'about': 'Consectetur dolore commodo fugiat amet enim in est excepteur duis ullamco dolor ex. Laboris elit quis quis nulla ex officia. Voluptate amet sit ut ad ipsum Lorem Lorem. Ea nisi enim non occaecat sunt sint. Laboris aliqua pariatur dolor labore id laboris sint nostrud anim do voluptate consectetur. Tempor pariatur minim qui aute in esse commodo.\r\n',
            'registered': '2016-03-13T04:42:08 +03:00'
        },
        {
            '_id': '58ff82975d1d8209ea9b0011',
            'isActive': true,
            'price': '$2,991.91',
            'picture': Lavi05,
            'age': 25,
            'dimension': 127,
            'name': 'Milagros Franco',
            'gender': 'female',
            'technique': 'CUJO',
            'about': 'Proident mollit reprehenderit sint reprehenderit nisi nisi velit fugiat pariatur elit occaecat aute commodo. In non reprehenderit aute consequat ut dolore fugiat adipisicing. Officia Lorem nostrud reprehenderit commodo in pariatur veniam. Amet incididunt non reprehenderit proident. Non do ipsum ipsum nisi veniam Lorem duis irure adipisicing velit officia ad consequat. Cillum magna ut quis proident culpa cupidatat laborum consectetur sint eu. Adipisicing voluptate ut anim voluptate ullamco eiusmod voluptate in.\r\n',
            'registered': '2016-03-31T08:17:04 +03:00'
        },
        {
            '_id': '58ff8297130609a851b89607',
            'isActive': false,
            'price': '$2,160.08',
            'picture': Lavi06,
            'age': 25,
            'dimension': 57,
            'name': 'Lila Dale',
            'gender': 'female',
            'technique': 'ULTRIMAX',
            'about': 'Adipisicing est veniam laboris do. Nulla ullamco consequat cillum reprehenderit dolor id. Id exercitation laborum ex eiusmod ex ullamco exercitation eiusmod est. Aute veniam aute esse ut sunt cupidatat aliqua ex dolore. Esse commodo sunt incididunt aute ipsum. Sunt consequat ex nisi deserunt minim deserunt ipsum magna labore. Aute tempor dolor enim ullamco ullamco mollit.\r\n',
            'registered': '2015-08-12T04:24:41 +03:00'
        },
        {
            '_id': '58ff8297e4fc7112404cb62f',
            'isActive': false,
            'price': '$3,721.50',
            'picture': Lavi07,
            'age': 22,
            'dimension': 220,
            'name': 'Shana Langley',
            'gender': 'female',
            'technique': 'BLURRYBUS',
            'about': 'Fugiat dolor mollit tempor incididunt anim nisi commodo ut culpa labore cupidatat id. Ad pariatur aute veniam et quis sunt in eu do adipisicing occaecat in adipisicing. Ex laborum consequat eiusmod aute in proident. Eu esse in aliqua esse adipisicing veniam aliquip. Culpa duis proident sit sunt tempor sint commodo dolore incididunt.\r\n',
            'registered': '2017-03-14T11:56:52 +03:00'
        },
        {
            '_id': '58ff8297e4fc7104204cb73f',
            'isActive': false,
            'price': '$3,721.50',
            'picture': Lavi08,
            'age': 22,
            'dimension': 220,
            'name': 'Shana Langley',
            'gender': 'female',
            'technique': 'BLURRYBUS',
            'about': 'Fugiat dolor mollit tempor incididunt anim nisi commodo ut culpa labore cupidatat id. Ad pariatur aute veniam et quis sunt in eu do adipisicing occaecat in adipisicing. Ex laborum consequat eiusmod aute in proident. Eu esse in aliqua esse adipisicing veniam aliquip. Culpa duis proident sit sunt tempor sint commodo dolore incididunt.\r\n',
            'registered': '2017-03-14T11:56:52 +03:00'
        },
        {
            '_id': '58ff8127b4130a0837917607',
            'isActive': false,
            'price': '$2,795.56',
            'picture': Lavi09,
            'age': 21,
            'dimension': 44,
            'name': 'Joyner Dodson',
            'gender': 'male',
            'technique': 'VIRXO',
            'about': 'Incididunt commodo ea ad nulla. Qui enim incididunt cillum nostrud mollit aute elit dolore ex. Ex eiusmod tempor ut commodo incididunt. Nostrud voluptate exercitation nulla laborum veniam do do ex proident voluptate. Eu consequat commodo mollit cupidatat labore irure exercitation velit fugiat id pariatur excepteur consequat mollit. Ex non mollit sunt esse culpa eu sunt cillum.\r\n',
            'registered': '2016-06-05T08:58:41 +03:00'
        },
        {
            '_id': '58ff82369731f0f3fbaa9503',
            'isActive': false,
            'price': '$1,035.01',
            'picture': Lavi10,
            'age': 35,
            'dimension': 147,
            'name': 'Berg Santiago',
            'gender': 'male',
            'technique': 'ZENTIX',
            'about': 'Consectetur dolore commodo fugiat amet enim in est excepteur duis ullamco dolor ex. Laboris elit quis quis nulla ex officia. Voluptate amet sit ut ad ipsum Lorem Lorem. Ea nisi enim non occaecat sunt sint. Laboris aliqua pariatur dolor labore id laboris sint nostrud anim do voluptate consectetur. Tempor pariatur minim qui aute in esse commodo.\r\n',
            'registered': '2016-03-13T04:42:08 +03:00'
        },
        {
            '_id': '58ff17975d1d8209ea9b0011',
            'isActive': true,
            'price': '$2,991.91',
            'picture': Lavi11,
            'age': 25,
            'dimension': 127,
            'name': 'Milagros Franco',
            'gender': 'female',
            'technique': 'CUJO',
            'about': 'Proident mollit reprehenderit sint reprehenderit nisi nisi velit fugiat pariatur elit occaecat aute commodo. In non reprehenderit aute consequat ut dolore fugiat adipisicing. Officia Lorem nostrud reprehenderit commodo in pariatur veniam. Amet incididunt non reprehenderit proident. Non do ipsum ipsum nisi veniam Lorem duis irure adipisicing velit officia ad consequat. Cillum magna ut quis proident culpa cupidatat laborum consectetur sint eu. Adipisicing voluptate ut anim voluptate ullamco eiusmod voluptate in.\r\n',
            'registered': '2016-03-31T08:17:04 +03:00'
        }
    ]}

    renderWorks() {
        const { works, modal } = this.state;
        return (
            works.map((work) => (
                <div key={work._id}>
                    <div className="pic-box"  onClick={ () => this.openModal(work) } >
                        <div className="picture" style={{ backgroundImage: `url('${work.picture}')` }}></div>
                        <img src={ink} className="marquer" />
                    </div>
                    { modal && this.renderModal(work) }
                </div>
            ))
        )
    }

    closeModal = () => {
        this.setState({ modal: false });
    }

    openModal = (work) => {
        this.setState({ modal: work });
    }

    addToCart = (work) => {
        console.log('add to cart', work);
    }

    renderModal = (modal) => {
        if (this.state.modal._id === modal._id) return (
            <div aria-hidden="true" className="dialog">
                <div className="overlay" onClick={ () => this.closeModal() } ></div>
                <div className="modal" >
                    <img src={ modal.picture } alt={modal.name} className="modal-image"/>
                    <div className="infos-legend">
                        <div className="legend" onClick={ () => this.closeModal() }>
                            <p><strong>Fechar</strong></p>
                        </div>
                        <div className="legend">
                            <p><strong>{modal.name}</strong></p>
                            <p><strong>{modal.technique}</strong></p>
                            <p>Acrylique et couteou</p>
                            <p>{ modal.dimension }x{ modal.dimension }</p>
                            { modal.isActive ? <p> {modal.price} </p> : <p>Vendido</p> }
                        </div>
                        <div className="legend" onClick={ () => this.addToCart(modal) }>
                            <button> add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="Works" style={{ backgroundColor: '#FDE52D' }}>
              <div className="container">
                <Title title="Trabalhos" />
                <div className="Grid">
                    { this.renderWorks() }
                </div>
              </div>
            </div>
        );
    }
}

export default Work;
