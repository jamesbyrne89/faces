import React, { Component } from 'react';
import './styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [{
                name: "James Byrne",
                title: "Junior Web Developer",
                email: "james.byrne@warehouse.co.uk",
                team: "Digital"
            }]
        }
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
            /nav> < /
            header >
            <
            main className = "app-content" > < header className = "controls-bar" > < /header > < /
            main > < /
            div >
        );
    }
}

export default App;