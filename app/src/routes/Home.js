import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <main className="wrapper">
        <h1>Sweet landing page</h1>

            <Link to='/login'>Sign In</Link>
    </main>

)

export default Home;