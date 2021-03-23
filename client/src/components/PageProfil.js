import React, {useContext} from 'react'
import { AuthContext } from './Contexts/AuthContext';

const PageProfil = (props) => {

    const authData = useContext(AuthContext)

    // redirection vers la page de connexion si aucun utilisateur n'est connecté
    if (!authData.isAuth)
    {
        props.history.push('/login');
    }

    return (
        <div>
          {authData.email}
        </div>
    )



}

export default PageProfil;