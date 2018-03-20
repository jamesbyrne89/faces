import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

const Login = () => {
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
                    <input type="text" />
                    <input type="password" />
                </div>
            </body>
        </div>
    )
}

export default Login;