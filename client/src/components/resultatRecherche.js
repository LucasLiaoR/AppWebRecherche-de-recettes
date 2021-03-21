import React from 'react';


class ResultatRecherche extends React.Component {

    state = {
        recipes: [],

        matchingRecipes: [],
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

    scanRecipes = ({id_recette, libelle_recette, difficulte, temps_prep, nom_fichier_image, proteine}) => {
        if (proteine === this.props.location.state.proteineSelected){
            console.log(libelle_recette)

            // set state avec liste des recettes
        }
    }

    renderMatchingRecipes = () => {
        // rendering des recettes 
    }

    render() {
        const {recipes, matchingRecipes} = this.state;

        
        return (
            <div id="resultatRecherche">
                <div>

                    {this.props.location.state.proteineSelected}
                    {this.props.location.state.ingrSuppList}
                    {this.props.location.state.ingredientSuppCount}

                    {recipes.map(this.scanRecipes)}
                    {matchingRecipes.map(this.renderMatchingRecipes)}
                    


                </div>

            </div>
        )
    }


}

export default ResultatRecherche;