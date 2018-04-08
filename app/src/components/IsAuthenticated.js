import React from 'react';
import { BrowserRouter as Router, withRouter, Redirect } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import Login from '../routes/Login';
import { auth } from '../models/Data';

const isAuthenticated = (Component) =>
    class IsAuthenticated extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                authUser: null,
            };
        }

        componentWillMount() {
            auth.onAuthStateChanged(authUser => {
                authUser
                    ? this.setState(() => ({ authUser }))
                    : this.setState(() => ({ authUser: null }));
            });
        }

        render() {
            const { authUser } = this.state;
            return (
                
                <AuthUserContext.Provider value={authUser}>
                   <Component userAuthenticated={authUser}/>
                </AuthUserContext.Provider>
            );
        }
    }
export default isAuthenticated;
