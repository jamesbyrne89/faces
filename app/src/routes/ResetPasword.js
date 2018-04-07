import React, { Component } from 'react';
import ReactDOM, { Redirect } from 'react-dom';
import update from 'immutability-helper';
import Head from 'next/head';
import Teams from '../pages/Teams';
import Router from 'next/router';
import Link from 'next/link';
import { app, base, facebookProvider, githubProvider } from '../models/Data';
import { CookiesProvider, Cookies } from 'react-cookie';



const ErrorMessage = props => {
    const { input, error, message } = props;
    return (
        <div className={`${input}-error` + (error ? ` show` : '')}>{message}</div>
    )
}

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

    }

    render() {

            const { email, valid } = this.state;
    
        return (
                <Head>
                    <title>faces | Reset Password</title>
                    <link href="/static/images/favicon-64x64.png?v=2" rel="icon" sizes="64x64" type="image/png"></link>
                    <link href="/static/images/favicon-32x32.png?v=2" rel="icon" sizes="32x32" type="image/png"></link>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                    <link href="/static/styles/styles.css" rel="stylesheet"></link>
                </Head>
                <main className="wrapper">
                    <div className="login-container">
                        <h2 className="login__title">Reset Password</h2>
                        <form className="login__form" onSubmit={}>
                            <label className="input-label">Provide your email below to receive a link to reset your password</label>
                            <input className={email.valid ? 'login__email' : 'login__email invalid'} value={email} type="email" onChange={this.emailHandler} placeholder="Email" />
                            <ErrorMessage input={'email'} error={!valid} message={'Please provide a valid email'} />
                            <label className="input-label">Password</label>
                            <button className="btn btn-submit" onClick={}>Login</button>
                        </form>
                    </div>
                </main>
        )
    }
}

export default ResetPassword;