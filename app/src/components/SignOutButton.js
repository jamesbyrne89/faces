import React from 'react';
import { app, auth } from '../models/Data';
import AuthUserContext from './AuthUserContext';

const SignOutButton = () => {
    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ?
            <button className="btn" onClick={() => auth.signOut()}>
          Sign Out
        </button>
        : null}
        </AuthUserContext.Consumer>
    )
}

export default SignOutButton;