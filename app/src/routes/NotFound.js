import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NotFound = () => (
    <main class="wrapper">
            <div className="error-container">
                <h1 className="not-found-error">404 - Page not found.</h1>
                <ul className="help-links">
                <Router>
                    <li><Link path='/'>Home</Link></li>
                    <li></li>
                    <li></li>
                    </Router>
                </ul>
            </div>
            </main>
        )

export default NotFound;