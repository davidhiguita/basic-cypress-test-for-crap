import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = ({ location }) => {
    return (
        <nav>
            <Link id="link-home" to="/">Home</Link>
            <br />
            { location.pathname === '/' && <Link id="link-login" to="/login">Logout</Link> }
            <br />
            <br />
        </nav>
    );
};

export default withRouter(Nav);
