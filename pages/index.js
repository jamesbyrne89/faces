import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from 'next/head';

const Index = () => {
    return (
        <div>
            <Head>
                <title>faces | Dashboard</title>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                <link href="/static/styles/styles.css" rel="stylesheet"></link>
            </Head>
                <App />
        </div>
    )
}

export default Index;
