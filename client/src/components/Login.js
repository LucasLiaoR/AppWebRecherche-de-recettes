import React, {useState, useContext} from 'react'
import '../App.css'
import { AuthContext } from './Contexts/AuthContext';
import { FirebaseContext } from './Firebase'




const Login = (props) => {

    const firebase = useContext(FirebaseContext);
    const authData = useContext(AuthContext);

    const data = {
        email: '',
        password: '',
    }


    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleLogin = e => {
        e.preventDefault();
        const { email, password } = loginData;
        firebase.signinUser(email, password)
        .then(user => {
            setLoginData({...data});
            authData.toggleAuth();
            authData.stockEmail(email);
            props.history.push('/profil');
        })
        .catch(error => {
            setError(error);
            setLoginData({...data})
        })
    }

    const {email, password} = loginData;


    const loginButn = email === '' || password === '' ? <button onClick={handleLogin} disabled>Se connecter</button> : <button onClick={handleLogin}>Se connecter</button>

    //gestion erreur
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <form onSubmit={handleLogin}>
            <div>
                {errorMsg}
            </div>

            <div>
                <input type="text" id="email" value={email} placeholder="Email" onChange={handleChange} required/>
            </div>
            <div>
                <input type="password" id="password" value={password} placeholder="Mot de passe" onChange={handleChange} required />
            </div>
            {loginButn}
        </form>
    )



}

export default Login;