import React, { Component } from 'react';
import ReactDOM, { Redirect } from 'react-dom';
import Head from 'next/head';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
    }

    authenticateWithEmail(e) {
        let email = this.emailInput.value;
        let password = this.passwordInput.value;
        e.preventDefault();
        console.table([{
            email: this.emailInput.value,
            password: this.passwordInput.value
        }])
        app.auth().fetchProvidersForEmail(email)
        .then(provider => {
            if (providers.length === 0) {
                // Create user

            } else {
                // Sign user in
            }
 
        })
        .catch(err => {
            console.error(err);
        })
        email = '';
        password = '';
    }

    render() {
        return (
            <div>
                <Head>
                    <title>faces | Dashboard</title>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                    <link href="/static/styles/styles.css" rel="stylesheet"></link>
                </Head>
                <body>
                    <div className="login-container">
                        <h2 className="login__title">Login here</h2>
                        <form onSubmit={(e) => { this.authenticateWithEmail }} ref={(form) => { this.loginForm = form }}>
                            <input ref={(input) => { this.emailInput = input }} type="text" />
                            <input ref={(input) => { this.passwordInput = input }} type="password" />
                            <button ref={(button) => { this.submitButton = button }} onClick={(e) => { this.authenticateWithEmail(e) }}>Login</button>
                        </form>
                    </div>
                </body>
            </div>
        )
    }
}

export default Login;