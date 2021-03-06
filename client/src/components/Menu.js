import React, {useContext} from 'react';
import logo from '../resources/logo2.png';
import {Link, NavLink} from 'react-router-dom';
import '../App.css';
import { AuthContext } from './Contexts/AuthContext'
import { FirebaseContext } from './Firebase';

const Menu = () => {

    const authData = useContext(AuthContext);
    const firebase = useContext(FirebaseContext)

    const logout = () => {
        
        firebase.signoutUser();
        authData.resetOnLogout();
    }

    if (authData.isAuth === false){
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#FDEBD0', borderRadius:'30px', zIndex:'1', position:'sticky', top:'0px', width:'100vw'}}>
                <div className="container-fluid">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Acceuil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recherche-recettes">Recherche de recettes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recettes">Toutes nos recettes</NavLink>
                        </li>
                        <li className="nav-item" id="login">
                            <NavLink className="nav-link" to="/login">Connexion</NavLink>
                        </li>
                        <li className="nav-item" id="register">
                            <NavLink className="nav-link" to="/inscription">Cr??er un compte</NavLink>
                        </li>

                    </ul>
                    </div>
                </div>
            </nav>)
    }
    else
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#FDEBD0', borderRadius:'30px', zIndex:'1', position:'sticky', top:'0px', width:'100vw'}}>
                <div className="container-fluid">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Acceuil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recherche-recettes">Recherche de recettes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/recettes">Toutes nos recettes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profil">Page de profil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" onClick={logout}>Deconnexion</NavLink>
                        </li>
                        

                    </ul>
                    </div>
                </div>
            </nav>)
    }
    

    

}

export default Menu;