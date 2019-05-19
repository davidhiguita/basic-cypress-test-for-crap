import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
    const [username, setUsername] = useState('');

    return (
        <div>
            <input
                id="input-username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
                placeholder="Username"
                type="text"
                value={username}
            />

            <br />
            <br />

            <button
                id="btn-login"
                onClick={() => {
                    if (username) {
                        history.push('/');
                    }
                }}
            >
                Go to app
            </button>
        </div>
    );
};

export default withRouter(Login);
