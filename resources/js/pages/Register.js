import React, { useState } from 'react';
import axios from 'axios';
import api from '../config/api.js';

function Register() {
    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        event.persist();
        setValue(prevState => ({...prevState, [event.target.name]: event.target.value}))
    }
    const handleSubmit = event => {
        event.preventDefault();

        api().get('/sanctum/csrf-cookie').then(() => {
            api().post('/login', value).then(res => {
                if (res.data.error) {
                    console.log(res.data.error);
                } else {
                    console.log('success')
                }
            });
        });
    }

    return (
        <React.Fragment>
        <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
        </div>
        <form>
            <h3>Register Here</h3>
            <label htmlFor="name">Username</label>
            <input
                type="text"
                name="name"
                placeholder="Username"
                id="name"
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
            />
            <label htmlFor="password_confirmation">Password Confirmation</label>
            <input
                type="password"
                name="password_confirmation"
                placeholder="Password confirmation"
                id="password_confirmation"
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Register</button>
        </form>
        </React.Fragment>
    );
}

export default Register;
