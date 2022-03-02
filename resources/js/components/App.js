import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import api from '../config/api.js';

function App() {
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
            <h3>Login Here</h3>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                //value={name}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                //value={password}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Log In</button>
            <div className="social">
              <div className="go"><i className="fab fa-google"></i>  Google</div>
              <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
        </form>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
