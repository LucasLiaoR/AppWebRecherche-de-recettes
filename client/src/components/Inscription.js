import React, {useState} from 'react'


const Inscription = () => {

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [loginData, setLoginData] = useState(data);

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const {pseudo, email, password, confirmPassword} = loginData;

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscription</button> : <button>Inscription</button>

    return (
        <div>
            <h2>Inscription</h2>
            <form>
                <div>
                    <label hmtlFor="pseudo">Pseudo</label>
                    <input onChange={handleChange} value={pseudo} type="text" id="pseudo" autoComplete="off" required />
                </div>
                
                <div>
                    <label hmtlFor="email">Email</label>
                    <input onChange={handleChange} value={email} type="email" id="email" autoComplete="off" required />
                </div>
                
                <div>
                    <label hmtlFor="password">Mot de passe</label>
                    <input onChange={handleChange} value={password} type="password" id="password" autoComplete="off" required />
                </div>

                <div>
                    <label hmtlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input onChange={handleChange} value={confirmPassword} type="password" id="confirmPassword" autoComplete="off" required />
                </div>

                {btn}

            </form>


        </div>

    )
}

export default Inscription;