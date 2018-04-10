import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './Login'

const Home = () => (
    <main className="wrapper">
        <h1>Sweet landing page</h1>

            <Link to='/login'>Sign In</Link>
    </main>

)

export default Home;