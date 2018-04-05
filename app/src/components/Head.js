import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

const SiteHead = (props) => {
    const { title } = props;  
    return ( 
    <Head>
        <title>faces | {title}</title>
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
        <link href="/static/styles/styles.css" rel="stylesheet"></link>
    </Head>
    )
}

export default SiteHead;