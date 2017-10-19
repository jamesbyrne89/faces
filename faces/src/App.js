import React, { Component } from 'react';
import './styles.css';

class App extends Component {
    constructor(props) {
        this.state = {
            profiles: []
        }
    }
    render() {
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
            main className = "app-content" >
            <
            /main> < /
            div >
        );
    }
}

export default App;