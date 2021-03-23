import React, {useState, useContext} from 'react'
import {FirebaseContext} from './Firebase'


const Inscription = () => {

    const firebase = useContext(FirebaseContext);

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        firebase.signupUser(email, password)
        .then(user => {
            setLoginData({...data})
        })
        .catch(error => {
            setError(error);
            setLoginData({...data})
        })
    }

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscription</button> : <button>Inscription</button>

    //gestion erreur
    const errorMsg = error !== '' && <span>{error.message}</span>;

    return (
        <div>
            <div>
                {errorMsg}
            </div>
            
            <h2>Inscription</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="pseudo">Pseudo</label>
                        <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                    </div>
                    
                    <div>
                        <label htmlFor="password">Mot de passe</label>
                        <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                    </div>

                    {btn}

                </form>
            </div>
            


        </div>

    )
}

export default Inscription;