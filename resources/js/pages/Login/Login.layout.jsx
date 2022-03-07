import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { Background, Shape, Form, Suggest } from './Login.styled'
// import styled from '@emotion/styled'
//  const Background = styled.div `
//     width: 430px;
//     height: 520px;
//     position: absolute;
//     transform: translate(-50%, -50%);
//     left: 50%;
//     top: 50%;
// `
//  const Shape = styled.div`
//     height: 200px;
//     width: 200px;
//     position: absolute;
//     border-radius: 50%;

//     &:first-child {
//         background: linear-gradient(#1845ad, #23a2f6);
//         left: -80px;
//         top: -80px;
//     }
//     &:last-child {
//         background: linear-gradient(to right,#ff512f,#f09819);
//         right: -30px;
//         bottom: -80px;
//     }
// `

//  const Form = styled.form`
//     // height: 520px;
//     width: 400px;
//     background-color: rgba(255, 255, 255, 0.13);
//     position: absolute;
//     transform: translate(-50%, -50%);
//     top: 50%;
//     left: 50%;
//     border-radius: 10px;
//     backdrop-filter: blur(10px);
//     border: 2px solid rgba(255, 255, 255, 0.1);
//     box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
//     padding: 50px 35px;

//     * {
//         font-family: 'Poppins', sans-serif;
//         color: #ffffff;
//         letter-spacing: 0.5px;
//         outline: none;
//         border: none;
//     }

//     h3 {
//         font-size: 32px;
//         font-weight: 500;
//         line-height: 42px;
//         text-align: center;
//     }

//     label {
//         display: block;
//         margin-top: 20px;
//         font-size: 16px;
//         font-weight: 500;
//     }

//     input {
//         display: block;
//         height: 50px;
//         width: 100%;
//         background-color: rgba(255, 255, 255, 0.07);
//         border-radius: 3px;
//         padding: 0 10px;
//         margin-top: 8px;
//         font-size: 14px;
//         font-weight: 300;
//     }

//     button {
//         margin-top: 30px;
//         width: 100%;
//         background-color: #ffffff;
//         color: #080710;
//         padding: 15px 0;
//         font-size: 18px;
//         font-weight: 600;
//         border-radius: 5px;
//         cursor: pointer;
//     }
// `
//  const Suggest = styled.div`
//     margin-top: 30px;
//     display: flex;

//     div {
//         width: 100%;
//         border-radius: 3px;
//         padding: 5px 10px;
//         background-color: rgba(255, 255, 255, 0.27);
//         color: #eaf0fb;
//     }
// `

function Login() {
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
            <Shape></Shape>
            <Shape></Shape>
        </Background>
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
        </React.Fragment>
    );
}

export default Login;
