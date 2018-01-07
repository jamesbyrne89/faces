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
                open: false
            }
        }
    }

    launchModal() {
        this.setState({
            modal: {
                open: !this.state.modal.open
            }
        })
    }

    showModal() {
        return this.state.modal.open ? < Modal className = "modal" / > : '';
    }

    render() {
        const { profiles } = this.state;
        return ( < div className = "app-container" >
            <
            header className = "header" >
            <
            h1 className = "App-title" > Faces App < /h1> <
            nav >
            <
            ul >
            <
            li > View seating plan < /li> <
            li > Teams < /li> <
            li > All Team Members < /li> <
            li > < /li> <
            li > < /li> < /
            ul > <
            /nav> <button onClick={this.launchModal.bind(this)}>Add photo <
            i className = "fa fa-camera" > < /i></button > < /
            header >
            <
            main className = "app-content" > < header className = "controls-bar" > < /header > {this.showModal()} < /
            main > < /
            div >
        );
    }
}

export default App;