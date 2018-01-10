import React, { Component } from 'react';
import './styles.css';
import Modal from './components/Modal';
import ProfileCard from './components/ProfileCard';
import LocationsDropdown from './components/LocationsDropdown';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [{
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "Jotis Moore",
                title: "Lead Developer",
                email: "jotis.moore@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            },
            {
                name: "Alix Burn",
                title: "Head Of Digital",
                email: "alixansDra.burn@warehouse.co.uk",
                team: "Digital",
                photo: "http://via.placeholder.com/250x250"
            }],
            modal: {
                open: false,
                content: null
            }
        }
    }

    modalHandler(openState, content) {
        this.setState({
            modal: {
                open: openState,
                content: content
            }
        });
    }


    render() {
        const { profiles } = this.state;
        const { modal } = this.state;
        const modalHandler = this.modalHandler.bind(this);
        return (
            <div className={"app-container" + (modal.open ? ' modal-opened' : '')} >
                <header className="header">
                    <h1 className="App-title">Faces App</h1>
                    <nav>
                        <ul>
                            <li>View seating plan</li>
                            <li>Teams</li>
                            <li>All Team Members</li>
                            <li></li>
                            <li></li>
                        </ul>
                    </nav>
                    <button className="btn btn-option" onClick={() => modalHandler(true, 'new_photo')}>Add photo <i className="fa fa-camera"> </i></button>
                </header>
                <main className="app-content">
                    <header className="controls-bar">
                    
                        <ul>
                            <li>Warehouse Fashions</li>
                            <li><button className="btn location"><i className="fa fa-map-marker"></i> London</button><LocationsDropdown /></li>
                            <li><button className="btn">Sign Out</button></li>
                        </ul>
                    </header>
                    <h2 className="page-title">Digital</h2>
                    <ul>
                        {profiles.map(item => <li key={item}><ProfileCard modalHandler={modalHandler} profile={item} /></li>)}
                    </ul>
                    <Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler} />
                </main>
            </div>
        );
    }
}

export default App;