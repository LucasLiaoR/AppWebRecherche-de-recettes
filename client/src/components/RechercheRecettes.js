import React, { Component } from 'react';
import '../App.css';

class RechercheRecette extends Component {

    state = {
        proteines: [

        ],

        ingredients_supp: [

        ],

        proteineSelected: '',

        ingredientSuppList: [],

        ValidSearch: true,
    };

    //Récupérer les données de la bdd si le component est bien invoqué
    componentDidMount() {
        this.getProteines();
        this.getIngredientsSupp();
     }

    //Peupler la state avec la liste des protéines contenues dans la bdd
    getProteines = () => {
        fetch(`http://localhost:4000/proteines`)
        .then(response => response.json())
        .then(response => this.setState({ proteines: response.data}))
        .catch(err => console.err(err))
    }

    //Peupler la state avec la liste des ingrédients supp contenues dans la bdd
    getIngredientsSupp = () => {
        fetch(`http://localhost:4000/ingredients_supp`)
        .then(response => response.json())
        .then(response => this.setState({ ingredients_supp: response.data}))
        .catch(err => console.err(err))
    }

    //Peupler la liste déroulante avec les différentes protéines
    renderProteinesListe = ({id_proteine, libelle_proteine}) => (
        <option key={id_proteine} value={`${libelle_proteine}`}>{libelle_proteine}</option>
    )

    //Peuple la liste déroulante avec les différents ingrédients
    renderIngredientListe = ({id_ingredient_supp, libelle_ingredient_supp}) => (
        <option key={id_ingredient_supp} value={`${libelle_ingredient_supp}`}>{libelle_ingredient_supp}</option>
    )

    //Redirection vers la page de résultat de la recherche
    handleResearch = () => {
        this.props.history.push('/resultat-recherche', {ingrSuppList: this.state.ingredientSuppList, proteineSelected: this.state.proteineSelected});
    }

    // Activation du bouton de recherche si au moins 1 protéine et 2 ingrédients supp ont été sélectionnés
    activateSearchButton() {
        if (this.state.proteineSelected !== '' && this.state.ingredientSuppList.length > 1)
        {
            this.setState({
                ValidSearch: false
            })
        }
    }
    
    //Stockage de la protéine électionnée dans la state pour la recherche
    handleProteine = e => {
        this.setState({
            proteineSelected: e.target.value
        })
       
        // Activer le bouton de recherche
        this.activateSearchButton();
    }

    

    // Vérifier si l'ingrédient séléctionné est déjà séléctionné dans un autre des choix, si non, rajout de cet ingrédient dans la state
    handleIngredientSupp = e => {

        if (e.target.value !== '' && !this.state.ingredientSuppList.includes(e.target.value))
        {
            
            var newIngredientSuppList = this.state.ingredientSuppList;
            newIngredientSuppList.push(e.target.value);
            this.setState({
                ingredientSuppList: newIngredientSuppList,
            })

            
        }
        
        // Activer le bouton de recherche
        this.activateSearchButton();
    }
        
    render(){

        //destructuration de la state
        const {proteines, ingredients_supp} = this.state;

        return (
            <div style={{marginTop: '20px'}}>
                <h3>Comment fonctionne notre outil de recherche ?</h3>
                <div id="text_explicative">
                    Pour vos déjeuner ou diner, <b>Frigovide-19</b> vous permet en fonction des quelques ingredients diponible dans votre frigo de trouver une recette adaptée. <br /> 
                    Afin d'utiliser le moteur de recherche ci-dessous veuillez saisir <b>un minimum de 2 ingrédients </b> Une proteine et au maximun 6 autres ingrédients.<br /> 
                    Le résultat correspondra à des recettes ayant matché au moins avec deux ingrédients : la protéine et un autre ingrédients.<br /> 
                </div>
                <div id="section_recherche">
                    <div style={{marginTop:'20px'}}>
                        <label>Protéine</label><br />
                        <select id="proteine" className="form-select" onChange={this.handleProteine}>
                            <option defaultValue></option>
                            {proteines.map(this.renderProteinesListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 1</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 2</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 3</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 4</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 5</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <div id="" style={{marginTop:'5px'}}>
                        <label>Ingredient 6</label><br />
                        <select className="form-select" onChange={this.handleIngredientSupp}>
                            <option defaultValue></option>
                            {ingredients_supp.map(this.renderIngredientListe)}
                        </select>
                    </div>
                    <button className="btn btn-lg btn-primary" disabled={this.state.ValidSearch} onClick={this.handleResearch}>Chercher une recette</button>
                </div>
                
                
                
            </div>
        )
    }



}

export default RechercheRecette;