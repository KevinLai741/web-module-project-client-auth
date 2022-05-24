import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            role: '',
            token: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials);
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(resp => {
                console.log(resp);
                localStorage.setItem('username', resp.data.username);
                localStorage.setItem('role', resp.data.role);
                localStorage.setItem('token', resp.data.token);
                this.props.history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        return (
            <div className='login'>
                <h1>LOGIN</h1>
                <form onSubmit={this.login}>
                    <label>    
                        Username
                        <input
                            type='text'
                            name='username'
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Password
                        <input 
                            type='password'
                            name='password'
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                            />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;