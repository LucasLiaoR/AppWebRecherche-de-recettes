import React, { Component, createContext } from 'react'


export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuth: false,
        username: 'test',
        email: 'test'
    }

    toggleAuth = () => {
        this.setState({
            isAuth: !this.state.isAuth
        })
    }

    stockUsername = (username) => {
        this.setState({
            username: username
        })
    }

    stockEmail= (email) => {
        this.setState({
            email: email
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth, stockUsername: this.stockUsername, stockEmail: this.stockEmail}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContextProvider;



