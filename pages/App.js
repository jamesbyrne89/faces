import React, { Component } from 'react';
import Login from '../pages/Login';
import Modal from '../components/Modal';
import ProfileCard from '../components/ProfileCard';
import LocationsDropdown from '../components/LocationsDropdown';
import Header from '../components/Header';
import Link from 'next/link';
import base from '../models/Data';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [
                { name: "Digital",
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
                    }]
                },
                {
                    name: "Brand Comms",
                    profiles: [{
                        name: "Jill Gate",
                        title: "Brand Comms Director",
                        email: "jill.gate@warehouse.co.uk",
                        team: "Brand Comms",
                        photo: "http://via.placeholder.com/250x250"
                    }]
                },
                {
                    name: "Retail",
                    profiles: []
                },
                {
                    name: "Buying",
                    profiles: []
                }
            ],
        locations: {
            list: [
                "London",
                "Stanton Harcourt",
                "International",
                "International 2",
                "International 3"
                ],
                current: "London"
        },
            modal: {
            open: false,
                content: null
        }
    }
}

filterTeams(name) {
    let { teams } = this.state;
    let teamName = name.toLowerCase();
    return teams.filter(team => (team.name).toLowerCase() === teamName);
}

getAllEmployees() {
    let { teams } = this.state;
  return teams.reduce((teams, team) => {
      return teams.concat(...team.profiles)
    }, []) 
}

modalHandler(openState, content) {
    this.setState({
        modal: {
            open: openState,
            content: content
        }
    });
}

componentWillMount() {
    base.syncState('teams', {
        context: this,
        state: 'teams'
    })
}

render() {
    const { teams, locations, modal } = this.state;
   // const allEmployees = teams.map(team => team.profiles)
    const modalHandler = this.modalHandler.bind(this);
    const filterTeams = this.filterTeams.bind(this);
    console.log(teams)
    return (
            <div className="app-container">
            
                <Login />
                
            </div>
    );
}
}

export default App;