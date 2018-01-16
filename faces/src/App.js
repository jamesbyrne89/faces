import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles.css';
import Dashboard from './views/Dashboard';
import Modal from './components/Modal';
import ProfileCard from './components/ProfileCard';
import LocationsDropdown from './components/LocationsDropdown';
import Header from './components/Header';
import Team from './views/Team';
import Teams from './views/Teams';


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
            teams: [
                "Digital",
                "Brand Comms",
                "Retail",
                "Buying"
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
            currentLocation: "London",
            modal: {
                open: false,
                content: null
            }
        }
    }

    filterTeams(name) {
        const { profiles } = this.state;
        let teamName = name.toLowerCase();
        return profiles.filter(profile => (profile.team).toLowerCase() === teamName);
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
        const { profiles, teams, locations } = this.state;
        const { modal } = this.state;
        const modalHandler = this.modalHandler.bind(this);
        const filterTeams = this.filterTeams.bind(this);

        return (
            <BrowserRouter>
                <div className={"app-container" + (modal.open ? ' modal-opened' : '')} >
                    <Header />
                    <main className="app-content">
                        <header className="controls-bar">

                            <ul>
                                <li>Warehouse Fashions</li>
                                <LocationsDropdown locations={locations} />
                                <li><button className="btn">Sign Out</button></li>
                            </ul>
                        </header>

                        <Switch>
                            <Route exact path="/"
                                render={(routeProps) => <Dashboard {...routeProps} profiles={profiles} modalHandler={this.modalHandler} />} />
                            <Route exact path="/teamname"
                                render={(routeProps) => <Team {...routeProps} filterTeams={filterTeams} profiles={profiles} modalHandler={this.modalHandler} />} />
                            <Route exact path="/teams"
                                render={(routeProps) => <Teams {...routeProps} profiles={profiles} teams={teams} />} />
                        </Switch>

                        <Modal open={this.state.modal.open} content={this.state.modal.content} handler={modalHandler} />
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;