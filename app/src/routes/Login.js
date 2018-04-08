import React, { Component } from 'react';
import Teams from '../components/Teams';
import { app, auth, base, facebookProvider, githubProvider } from '../models/Data';
import { login } from '../helpers/auth';
import { Link, Redirect } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, GithubIcon } from '../images/Icons';




const ErrorMessage = props => {
    const { input, error } = props;
    const errors = {
        email: {
            invalid: 'That doesn\'t seem to be a valid email',
            notFound: 'No account was found with that email address'
        },
        password: {
            incorrect: 'Incorrect password, please try again'
        }
    }
    const message = errors[input].invalid;
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
            emailInvalid: null,
            passwordInvalid: null,
            authenticated: false,
            focused: {
                email: false,
                password: false
            }
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
                error.code === "auth/invalid-email" && this.setState({ emailInvalid: true });
                error.code === "auth/invalid-password" && this.setState({ passwordInvalid: true });
            }
            )
    }

    handleInput(propertyName, value) {
        const byPropKey = (propertyName, value) => () => ({
            [propertyName]: value,
        });
        this.setState({ [propertyName]: value });
        if (propertyName === 'email') {
            console.log('handle change')
            this.state.email.focused &&
            this.showErrors(value)
        }
    }

    handleBlur(input) {
        this.setState({ focused: { ...this.state.focused, [input]: true } });
        input === 'email' && this.showErrors(this.state[input])
    }

    validateEmail(email) {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }

    showErrors(value) {
        const validity = this.validateEmail(value);
        console.log(validity)
        this.setState({ emailInvalid: !validity });
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
                        <input className={!emailInvalid ? 'login__email' : 'login__email invalid'}
                            type="email"
                            onChange={e => this.handleInput('email', e.target.value)}
                            onBlur={e => this.handleBlur(e.target.type)}
                            placeholder="Email"
                            autoComplete={'off'}
                        />
                        <ErrorMessage
                            input={'email'}
                            error={emailInvalid}
                        />
                        <label className="input-label">Password</label>
                        <input className={password ? 'login__password' : 'login__password invalid'}
                            type="password"
                            onChange={e => this.handleInput('password', e.target.value)}
                            onBlur={e => this.handleBlur(e.target.type)}
                            placeholder="Password"
                            autoComplete={'off'} />
                        <ErrorMessage
                            input={'password'}
                            error={passwordInvalid}
                            message={'Incorrect password'}
                        />
                        <button className="btn btn-submit"
                            onClick={this.authenticateWithEmail}>Login</button>

                    </form>
                    <div className='login__signup-link'>Don't have an account? <Link to='/signup'>Sign up.</Link></div>
                </div>
            </main>
        )
    }
}

export default Login;