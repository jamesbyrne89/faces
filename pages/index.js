import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from 'next/head';

const Index = () => {
    return (
        <html>
        <Head>
        <title>faces | Dashboard</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
        <link href="/static/styles/styles.css" rel="stylesheet"></link>
        </Head>
        <div>
            <App />
        </div>
        </html>
    )
}

export default Index;
