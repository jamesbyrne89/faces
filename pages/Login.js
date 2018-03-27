import React, { Component } from 'react';
import ReactDOM, { Redirect } from 'react-dom';
import Head from 'next/head';
import Teams from '../pages/Teams';
import Router from 'next/router';
import { app, base, facebookProvider, githubProvider } from '../models/Data';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.authenticateWithFacebook = this.authenticateWithFacebook.bind(this);
        this.authenticateWithGithub = this.authenticateWithGithub.bind(this);
        this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
    }

    authenticateWithFacebook() {
        app.auth().signInWithPopup(facebookProvider)
            .then((result, err) => {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Facebook');
                }
                else {
                    this.setState({ redirect: true });
                }
            })
    }

    authenticateWithGithub() {
        app.auth().signInWithPopup(githubProvider)
            .then((result, err) => {
                if (err) {
                    // Show error
                    alert('Unable to sign in with Github');
                }
                else {
                    this.setState({ redirect: true });
                }
            })
    }

    authenticateWithEmail(e) {
        let email = this.emailInput.value;
        let password = this.passwordInput.value;
        e.preventDefault();

        app.auth().fetchProvidersForEmail(email)
            .then(providers => {
                if (providers.length === 0) {
                    // Create user
                    return app.auth().createUserWithEmailAndPassword(email, password);
                } else if (providers.indexOf("password") === -1) {
                    // They used Facebook
                    email = '';
                    password = '';
                    alert('Please try an alternative login')
                } else {
                    // Sign user in
                    return app.auth().signInWithEmailAndPassword(email, password);
                }

            })
            .then(user => {
                console.log(user || 'user is undefined')
                if (user && user.email) {
                    email = '';
                    password = '';
                    this.setState({ redirect: true });
                    console.log('Successfully logged in')
                }
            })
            .catch(err => {
                console.error(err.message);
            })


    }

    render() {
        if (this.state.redirect) {
            {Router.push('/Teams')}
        }

        return (
            <div>
                <Head>
                    <title>faces | Login</title>
                    <link href="/static/images/favicon-64x64.png?v=2" rel="icon" sizes="64x64" type="image/png"></link>
                    <link href="/static/images/favicon-32x32.png?v=2" rel="icon" sizes="32x32" type="image/png"></link>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                    <link href="/static/styles/styles.css" rel="stylesheet"></link>
                </Head>
                <main className="wrapper">
                    <div className="login-container">
                        <h2 className="login__title">Login</h2>
                        <div className="login__methods">
                            <button className="btn login-method fb-login" onClick={this.authenticateWithFacebook}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h6.5v-7h-2v-2h2v-1c0-1.653 1.347-3 3-3h2v2h-2c-0.55 0-1 0.45-1 1v1h3l-0.5 2h-2.5v7h4.5c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5z"></path>
                                </svg>
                                <span>Login with Facebook</span></button>
                            <button className="btn login-method tw-login" disabled>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z"></path>
                                </svg>
                                <span>Login with Twitter</span></button>
                            <button className="btn login-method gh-login" onClick={this.authenticateWithGithub}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"></path>
                                </svg>
                                <span>Login with Github</span>
                            </button>
                        </div>
                        <form className="login__form" onSubmit={(e) => { this.authenticateWithEmail }} ref={(form) => { this.loginForm = form }}>
                            <label className="input-label">Email</label>
                            <input className="login__email" ref={(input) => { this.emailInput = input }} type="email" placeholder="Email" />
                            <label className="input-label">Password</label>
                            <input className="login__password" ref={(input) => { this.passwordInput = input }} type="password" placeholder="Password" />
                            <button className="btn btn-submit" ref={(button) => { this.submitButton = button }} onClick={(e) => { this.authenticateWithEmail(e) }}>Login</button>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login;