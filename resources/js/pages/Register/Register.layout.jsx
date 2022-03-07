import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Background, Shape, Form, Suggest } from './Register.styled'
import axios from 'axios';

function Register() {
    const [token, setToken] = useState(null)

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    let navigate = useNavigate();

    const handleChange = event => {
        event.persist();
        setValue(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    }
    const handleSubmit = event => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/register', value)
            .then(function(response) {
                setToken(response.data.access_token)
                navigate("/")
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    };
    const getToken = () => {
        axios.get(
                'http://127.0.0.1:8000/api/user-profile',
                config
            )
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    // useEffect(() => {
    //     console.log(token)
    // }, [token])

    return (
        <React.Fragment>
        <Background>
                <Shape></Shape>
                <Shape></Shape>
        </Background>
        <Form>
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
        <Suggest>
            <div>Already have an account?<Link to="/login">Log in</Link></div>
        </Suggest>
        </Form>
        </React.Fragment>
    );
}

export default Register;
