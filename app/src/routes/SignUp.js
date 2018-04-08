import React, { Component } from 'react';
import { app, base, facebookProvider, githubProvider } from '../models/Data';
import { Link } from 'react-router-dom';
import { createNewUser } from '../helpers/auth';
import { FacebookIcon, TwitterIcon, GithubIcon } from '../images/Icons';


const ErrorMessage = props => {
    const { input, error, message } = props;
    return <div className={`${input}-error` + (error ? ` show` : '')}>{message}</div>
}


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passwordOne: '',
            passwordTwo: '',
            emailInvalid: false,
            passwordInvalid: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInput(propertyName, value) {
        const byPropKey = (propertyName, value) => () => ({
            [propertyName]: value,
        });
        this.setState({ [propertyName]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, passwordOne, passwordTwo } = this.state;
        if (passwordOne.length < 6) {
            console.log('Password is too short')
            this.setState({ passwordInvalid: true })
        }
        else {
            if (passwordOne !== passwordTwo) {
                console.log('Passwords do not match')
                this.setState({ passwordInvalid: true })
            }
            else {
                createNewUser(email, passwordOne)
                    .catch(e => console.log(e))
            }
        }
    }

    render() {

        const { email, passwordOne, passwordTwo, emailInvalid, passwordInvalid } = this.state;

        return (
            <main className="wrapper">
                <div className="login-container">
                    <h2 className="login__title">Create an account</h2>
                    <div className="login__methods">
                        <button className="btn login-method fb-login" onClick={this.authenticateWithFacebook}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <FacebookIcon />
                            </svg>
                            <span>Sign up with Facebook</span></button>
                        <button className="btn login-method tw-login" disabled>
                            <TwitterIcon />
                            <span>Sign up with Twitter</span></button>
                        <button className="btn login-method gh-login" onClick={this.authenticateWithGithub}>
                            <GithubIcon />
                            <span>Sign up with Github</span>
                        </button>
                    </div>
                    <form className="login__form" onSubmit={this.handleSubmit}>
                        <label className="input-label">Email</label>
                        <input className={!emailInvalid ? 'login__email' : 'login__email invalid'} value={email} type="email" onChange={e => this.handleInput('email', e.target.value)} placeholder="Email" />
                        <ErrorMessage input={'email'} error={emailInvalid} message={'Please provide a valid email'} />
                        <label className="input-label">Password</label>
                        <input className={!passwordInvalid ? 'login__password' : 'login__password invalid'} value={passwordOne} type="password" onChange={e => this.handleInput('passwordOne', e.target.value)} placeholder="Password" />
                        <ErrorMessage input={'password'} error={''} message={'Incorrect password'} />
                        <label className="input-label">Re-type password</label>
                        <input className={!passwordInvalid ? 'login__password' : 'login__password invalid'} value={passwordTwo} type="password" onChange={e => this.handleInput('passwordTwo', e.target.value)} placeholder="Retype password" />
                        <ErrorMessage input={'password'} error={''} message={'Incorrect password'} />
                        <button className="btn btn-submit" onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                    <div className='login__signup-link'>Already have an account? <Link to='/login'>Log in.</Link></div>
                </div>
            </main>
        )
    }
}

export default SignUp;