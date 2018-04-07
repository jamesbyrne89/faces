import React, { Component } from 'react';
import Login from './routes/Login';
import Layout from './components/Layout';
import Modal from './components/Modal';
import ProfileCard from './components/ProfileCard';
import { app, base } from './models/Data';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            uid: '',
            admin: false,
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
    this.checkAuthStatus = this.checkAuthStatus.bind(this);
}

checkAuthStatus() {

    let user = app.auth().currentUser
        if (user) {
          console.log('Logged in')
          this.setState({ authenticated: true });
        } else {
          // No user is signed in.
          console.warn('Not logged in')
          this.setState({ authenticated: false });
        }
}

signOut() {
    this.setState({ authenticated: false });
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
    this.checkAuthStatus();
    console.log('Checked auth status')
    base.syncState('teams', {
        context: this,
        state: 'teams'
    })
}

render() {
    const { teams, locations, modal, authenticated } = this.state;
   // const allEmployees = teams.map(team => team.profiles)
    const modalHandler = this.modalHandler.bind(this);
    const filterTeams = this.filterTeams.bind(this);
    const signOut = this.signOut.bind(this);
    console.log(authenticated)
    return (
            
               authenticated ? <Layout teams={teams} signOut={signOut} locations={locations} /> : <Login />
            
    );
}
}

export default App;
