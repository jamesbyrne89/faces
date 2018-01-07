import React, { Component } from 'react';
import './styles.css';
import Modal from './components/Modal';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [{
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital"
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
        const modalHandler = this.modalHandler.bind(this);
        return (
        <div className="app-container">
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
            <main className="app-content"> <header className="controls-bar"></header>
                <Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler}/>
            </main>
        </div>
        );
    }
}

export default App;