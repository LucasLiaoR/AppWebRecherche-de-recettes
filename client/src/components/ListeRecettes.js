import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';


//Importer en dynamique les images d'un folder
// function importAll(r) {
//     return r.keys().map(r);
//   }
  
// const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));


class RechercheRecette extends Component {

    state = {
        recipes: [

        ]
    };

    componentDidMount() {
       this.getRecipes();
    }

    getRecipes = () => {
        fetch(`http://localhost:4000/recipes`)
        .then(response => response.json())
        .then(response => this.setState({ recipes: response.data}))
        .catch(err => console.err(err))
    }

    renderRecipes = ({id_recette, libelle_recette, difficulte, temps_prep, nom_fichier_image}) => (
        <div className="card" style={{width: '18rem', margin:'20px'}}>
            <Link to='/recettes'><img src={`/static/images/${nom_fichier_image}`} style={{height:'200px'}} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
                <h5 className="card-title">{libelle_recette}</h5>
                <p className="card-text">Difficulté : {difficulte} - Temps : {temps_prep} min</p>
            
            </div>
        </div>
    )



    render(){
        const {recipes} = this.state;
        return (
            <div style={{marginTop: '20px'}}>
                <h1>Toutes nos recettes</h1>
                <div className='sectionResultat'>
                    {recipes.map(this.renderRecipes)}
                </div>


            </div>

            
        )
    }



}

export default RechercheRecette;