import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import NotFound from './routes/NotFound';
import Modal from './components/Modal';
import Dashboard from './routes/Dashboard';
import { app, auth, base } from './models/Data';
import Home from './routes/Home';
import Spinner from './components/Spinner';
import Team from './routes/Team';
import Teams from './components/Teams';
import Profile from './routes/Profile';



const ProtectedRoute = ({ component: Component, locations, userAuthenticated, ...rest }) => {
    console.log(...rest)
    return (
        <Route {...rest}
            render={props => {
                console.log(...rest)
                return (
                    userAuthenticated
                        ? <Fragment>
                            <Modal {...rest} />
                            <Component
                            locations={locations}
                            userAuthenticated={userAuthenticated}
                            {...props}
                            {...rest} />
                            </Fragment>
                        : <Redirect to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }} />
                )
            }
            }
        />
    );
}

const PublicRoute = ({ component: Component, userAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            !userAuthenticated
                ? <Component {...props} />
                : <Redirect to='/dashboard' />}
    />
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAuthenticated: false,
            loading: true,
            modalIsOpen: false,
            teams: [
                {
                    name: "Digital",
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
            }
        }
    }


    signOut() {
        this.setState({ userAuthenticated: false });
        auth.signOut();
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



    checkAuth() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    userAuthenticated: true,
                    loading: false
                })
            } else {
                this.setState({
                    userAuthenticated: false,
                    loading: false
                });
            }
        })
    }

    componentDidMount() {
        this.removeListener = auth.onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    userAuthenticated: true,
                    loading: false
                })
            } else {
                this.setState({
                    userAuthenticated: false,
                    loading: false
                })
            }
        })
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    componentWillUnmount() {
        this.removeListener()
    }

    render() {
        const { teams, locations, modalIsOpen, userAuthenticated } = this.state;
        console.log(...this.state)
        return this.state.loading
            ? <Spinner />
            : (
                <Router>
                    <Fragment>
                        <Switch>
                            <ProtectedRoute exact path='/'
                                component={Home} />
                            <PublicRoute userAuthenticated={userAuthenticated} exact path='/login' component={Login} />
                            <PublicRoute userAuthenticated={userAuthenticated} exact path='/signup' component={SignUp} />
                            <ProtectedRoute path='/dashboard'
                                {...this.state}
                                component={Dashboard} />
                            <ProtectedRoute path='/profile'
                                {...this.state}
                                component={Profile} />
                            <ProtectedRoute path={`/teams/${this.props.params}`}
                                {...this.state}
                                component={Teams} />
                            <Route component={NotFound} />
                            {/* <ProtectedRoute userAuthenticated={userAuthenticated} exact path='/' component={() => <Dashboard />} /> */}
                        </Switch>
                    </Fragment>
                </Router >
            );
    }
}


export default App;
