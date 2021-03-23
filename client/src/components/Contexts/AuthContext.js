import React, { Component, createContext } from 'react'


export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuth: false,
        username: '',
        email: ''
    }

    toggleAuth = () => {
        this.setState({
            isAuth: !this.state.isAuth
        })
    }

    stockUsername = (usernameNew) => {
        this.setState({
            username: usernameNew
        })
    }

    stockEmail = (emailNew) => {
        this.setState({
            email: emailNew
        })
    }

    resetOnLogout = () => {
        this.setState({
            isAuth: false,
            username: '',
            email: ''
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth, stockUsername: this.stockUsername, stockEmail: this.stockEmail, resetOnLogout: this.resetOnLogout}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContextProvider;



