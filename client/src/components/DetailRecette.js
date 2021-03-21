import React from 'react';


class DetailRecette extends React.Component {

    state = {
        recipe: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:4000/detail-recette/${id}`)
        .then(response => response.json())
        .then(response => this.setState({ recipe: response.data}))
        .catch(err => console.err(err))
    }

    renderRecipeDetail = ({libelle_recette, index}) => {
        return <div key="index">{libelle_recette}</div>
    }


    render(){
        console.log(this.state.recipe)
        

        return (
            <div>
                <h1>Detail de la recette</h1>
                {this.state.recipe.map(this.renderRecipeDetail)}
            </div>
        )
    }

}


export default DetailRecette;