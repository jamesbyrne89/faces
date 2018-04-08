import React from 'react';
import { app, auth } from '../models/Data';
import AuthUserContext from './AuthUserContext';
import { logout } from '../helpers/auth';

const SignOutButton = () => {
    return (
            <button className="btn" type='button' onClick={() => logout()}>
          Sign Out
        </button>
    )
}

export default SignOutButton;