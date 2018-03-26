import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

class Login extends Component {
    constructor(props) {
        super(props)
        this.authenticateWithEmail = this.authenticateWithEmail.bind(this);
    }

    authenticateWithEmail(e) {
        e.preventDefault();
        console.table([{
            email: this.emailInput.value,
            password: this.passwordInput.value
        }])
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
                    <input ref={emailInput} type="text" />
                    <input ref={passwordInput} type="password" />
                    <button onClick={authenticateWithEmail}>Login</button>
                </div>
            </body> 
        </div>
    )
}
}

export default Login;