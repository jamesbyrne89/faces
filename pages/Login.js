import React, { Component } from 'react';
import ReactDOM, { Redirect } from 'react-dom';
import Head from 'next/head';
import { app, base, facebookProvider } from '../models/Data';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.authenticateWithFacebook = this.authenticateWithFacebook.bind(this);
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

    authenticateWithEmail(e) {
        let email = this.emailInput.value;
        let password = this.passwordInput.value;
        e.preventDefault();

        app.auth().fetchProvidersForEmail(email)
            .then(provider => {
                if (provider.length === 0) {
                    // Create user
                    return app.auth().createUserWithEmailAndPassword(email, password);
                } else {
                    // Sign user in
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
                console.error(err);
            })


    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }

        return (
            <div>
                <Head>
                    <title>faces | Dashboard</title>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                    <link href="/static/styles/styles.css" rel="stylesheet"></link>
                </Head>
                <main className="wrapper">
                    <div className="login-container">
                        <h2 className="login__title">Login</h2>
                        <div className="login__methods">
                            <button className="btn login-method fb-login" onClick={this.authenticateWithFacebook}>Login with Facebook</button>
                            <button className="btn login-method tw-login">Login with Twitter</button>
                            <button className="btn login-method gh-login">Login with Github</button>
                        </div>
                        <form className="login__form" onSubmit={(e) => { this.authenticateWithEmail }} ref={(form) => { this.loginForm = form }}>
                            <label className="input-label">Email</label>
                            <input className="login__email" ref={(input) => { this.emailInput = input }} type="email" />
                            <label className="input-label">Password</label>
                            <input className="login__password" ref={(input) => { this.passwordInput = input }} type="password" />
                            <button className="btn btn-submit" ref={(button) => { this.submitButton = button }} onClick={(e) => { this.authenticateWithEmail(e) }}>Login</button>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Login;