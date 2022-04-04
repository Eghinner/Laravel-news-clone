import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { Background, Content, Shape, Form, Suggest } from './Login.styled'

const Login = () => {
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
            <Background>
                <Content>
                    <Shape></Shape>
                    <Shape></Shape>
                </Content>
                <Form>
                    <h3>Login Here</h3>
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
                    <button onClick={handleSubmit}>Log In</button>
                    <Suggest>
                        <div>New to PostmanGo? <Link to="/register">Sign Up</Link></div>
                    </Suggest>
                </Form>
            </Background>
        </React.Fragment>
            );
}

export default Login;
