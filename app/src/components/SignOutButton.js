import React from 'react';
import { logout } from '../helpers/auth';

const SignOutButton = () => {
    return (
            <button className="btn" type='button' onClick={() => logout()}>
          Sign Out
        </button>
    )
}

export default SignOutButton;