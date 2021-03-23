import React from 'react'
import '../App.css'




class Login extends React.Component {


    state = {
        username: '',
        password: '',
        isAuth: false,
        buttonDisabled: false,
        user: []
    }

    handleChange = e => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    login = () => {
        
    }

    render () {
        return (
            <div>
                <div>
                    <input type="text" id="username" className="fadeIn second" placeholder="login" onChange={this.handleChange} />
                    <input type="text" id="password" className="fadeIn third" placeholder="password" onChange={this.handleChange} />
                    <button onClick={this.login} disabled={this.state.buttonDisabled}>Log in</button>

                </div>
            </div>
        )
    }


}

export default Login;