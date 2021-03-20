import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import imgRecette1 from '../resources/r1.png'


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

    getRecipes = _ => {
        fetch(`http://localhost:4000/recipes`)
        .then(response => response.json())
        .then(response => this.setState({ recipes: response.data}))
        .catch(err => console.err(err))
    }

    renderRecipes = ({id_recette, libelle_recette}) => (
        <div>
            <div key={id_recette}>{libelle_recette}</div>
        </div>
    )

    renderRecipes2 = ({id_recette, libelle_recette, difficulte, temps_prep, nom_fichier_image}) => (
        <div className="card" style={{width: '18rem', margin:'20px'}}>
            <img src={`/static/images/${nom_fichier_image}`} style={{height:'200px'}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{libelle_recette}</h5>
                <p className="card-text">Difficulté : {difficulte} - Temps : {temps_prep} min</p>
                
            </div>
        </div>
    )



    render(){
        const {recipes} = this.state;
        return (

            <div className='sectionResultat'>
                {recipes.map(this.renderRecipes2)}
            </div>
        )
    }



}

export default RechercheRecette;