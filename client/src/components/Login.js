import React from 'react'
import '../App.css'
import { observer } from 'mobx-react'
import UserStore from './Stores/UserStore'



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

    

    // login = async() => {
    //     if (!this.state.username)
    //     {
    //         return;
    //     }
    //     if (!this.state.password)
    //     {
    //         return;
    //     }

    //     this.setState({
    //         buttonDisabled: true
    //     })

    //     try {
    //         let res = await fetch(`http://localhost:4000/login`, {
    //             method:'get',
    //             body: JSON.stringify({
    //                 username: this.state.username,
    //                 password: this.state.password,
    //             })
    //         });

    //         let result = await res.json();
    //         if (result && result.success)
    //         {
    //             UserStore.isLoggedIn = true;
    //             UserStore.username = result.username;
    //         }
    //         else if (result && result.success === false){
    //             this.setState({
    //                 username: '',
    //                 password: '',
    //                 buttonDisabled: false
                    
    //             })
    //             alert(result.msg);
    //         }
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
        
    // }

    render () {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    </div>


                        <input type="text" id="username" className="fadeIn second" placeholder="login" onChange={this.handleChange} />
                        <input type="text" id="password" className="fadeIn third" placeholder="password" onChange={this.handleChange} />
                        <button onClick={this.login} disabled={this.state.buttonDisabled}>Log in</button>

                </div>
            </div>
        )
    }


}

export default observer(Login);