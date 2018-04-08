import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Login from './Login'

const Home = () => (
    <main className="wrapper">
        <h1>Sweet landing page</h1>
        <Router>
            <Link to='/login' component={Login}>Sign In</Link>
        </Router>
    </main>

)

export default Home;