import React from 'react';
import {Link} from 'react-router-dom';


class ResultatRecherche extends React.Component {

    state = {
        recipes: [],

        recipesList: ''
    }



    componentDidMount() {
       this.getRecipes();
    }
 
    getRecipes = () => {
        fetch(`http://localhost:4000/recipes`)
        .then(response => response.json())
        .then(response => this.setState({ recipes: response.data}))
        .catch(err => console.err(err))
    }

    scanRecipes = ({id_recette, difficulte, temps_prep, nom_fichier_image, libelle_recette,proteine, ingr1, ingr2, ingr3, ingr4, ingr5, ingr6, ingr7, ingr8, ingr9, ingr10, ingr11, ingr12, ingr13, ingr14, ingr15}) => {
        if (proteine === this.props.location.state.proteineSelected){
            
            var ingrSuppMapListTemp = [ingr1, ingr2, ingr3, ingr4, ingr5, ingr6, ingr7, ingr8, ingr9, ingr10, ingr11, ingr12, ingr13, ingr14, ingr15]

            var matchingCountIngrSupp = 0

            ingrSuppMapListTemp.forEach(ingrSupp => {
                if (this.props.location.state.ingrSuppList.includes(ingrSupp))
                {
                    matchingCountIngrSupp++;
                }
            })


            if(matchingCountIngrSupp>=1)
            {
                return (
                    <div key={id_recette} className="card" style={{width: '18rem', margin:'20px'}}>
                        <Link to={{
                            pathname:'/detail-recette',
                            idRecette:id_recette
                        }}><img src={`/static/images/${nom_fichier_image}`} style={{height:'200px'}} className="card-img-top" alt="..." /></Link>
                        <div className="card-body">
                            <h5 className="card-title">{libelle_recette}</h5>
                            <p className="card-text">Difficulté : {difficulte} - Temps : {temps_prep} min</p>
                        
                        </div>
                    </div>
                )
            }
        }
    }


    render() {
        const {recipes} = this.state;


        
        return (
            <div id="resultatRecherche">
                <h1>Résultat de votre recherche avec les critères : {this.props.location.state.proteineSelected}, {this.props.location.state.ingrSuppList.join(", ")}</h1>
                <div className='sectionResultat'>
                    {recipes.map(this.scanRecipes)}
                </div>

            </div>
        )
    }


}

export default ResultatRecherche;