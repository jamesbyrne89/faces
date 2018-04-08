import React, { Component } from 'react';
import Teams from '../components/Teams';
import { app, auth, base, facebookProvider, githubProvider } from '../models/Data';
import { login } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, GithubIcon } from '../images/Icons';




const ErrorMessage = props => {
    const { input, error, message } = props;
    console.log(error)
    return (
        <div className={`${input}-error` + (error ? ` show` : '')}>{message}</div>
    )
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailInvalid: false,
            passwordInvalid: false,
            authenticated: false,
            redirect: false
        }
        const errors = {
            passwordIncorrect: 'Incorrect password, please try again',
            passwordsDoNotMatch: 'Passwords do not match',
            invalidEmail: 'That doesn\'t seem to be a valid email',
            noEmailFound: 'No account was found with that email address'
        }
        this.authenticateWithFacebook = this.authenticateWithFacebook.bind(this);
        this.authenticateWithGithub = this.authenticateWithGithub.bind(this);
        this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
        this.handleInput = this.handleInput.bind(this);
    
    }

    authenticateWithFacebook() {
        auth.signInWithPopup(facebookProvider)
            .then((result, err) => {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Facebook');
                }
                else {
                    // this.setState({ redirect: true });
                }
            })
    }

    authenticateWithGithub() {
        auth.signInWithPopup(githubProvider)
            .then((result, err) => {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Github');
                }
                else {
                    // this.setState({ redirect: true });
                }
            })
    }

    authenticateWithEmail(e) {
        const { email, password } = this.state;
        e.preventDefault();
        login(email, password)
        .then(() => console.log('Successfully signed in'))
        .catch((error) => {
            console.warn('Error messaging goes here', error)
            // this.setState(setErrorMsg('Invalid username/password.'))
          })      
    }

    handleInput(propertyName, value) {
        const byPropKey = (propertyName, value) => () => ({
            [propertyName]: value,
        });
        this.setState({ [propertyName]: value });
    }

    render() {
        const { email, password, emailInvalid, passwordInvalid, redirect, authenticated } = this.state;

        return (
            <main className="wrapper">
                <div className="login-container">
                    <h2 className="login__title">Login</h2>
                    <div className="login__methods">
                        <button className="btn login-method fb-login" onClick={this.authenticateWithFacebook}>
                            <FacebookIcon />
                            <span>Login with Facebook</span></button>
                        <button className="btn login-method tw-login" disabled>
                            <TwitterIcon />
                            <span>Login with Twitter</span></button>
                        <button className="btn login-method gh-login" onClick={this.authenticateWithGithub}>
                            <GithubIcon />
                            <span>Login with Github</span>
                        </button>
                    </div>
                    <form className="login__form" onSubmit={this.authenticateWithEmail}>
                        <label className="input-label">Email</label>
                        <input className={email ? 'login__email' : 'login__email invalid'} type="email" onChange={e => this.handleInput('email', e.target.value)} placeholder="Email" autoComplete={'off'}/>
                        <ErrorMessage input={'email'} error={emailInvalid} message={'Please provide a valid email'} />
                        <label className="input-label">Password</label>
                        <input className={password ? 'login__password' : 'login__password invalid'} type="password" onChange={e => this.handleInput('password', e.target.value)} placeholder="Password" autoComplete={'off'}/>
                        <ErrorMessage input={'password'} error={passwordInvalid} message={'Incorrect password'} />
                        <button className="btn btn-submit" onClick={this.authenticateWithEmail}>Login</button>

                    </form>
                    <div className='login__signup-link'>Don't have an account? Sign up <a href='/signup'>here.</a></div>
                </div>
            </main>
        )
    }
}

export default Login;