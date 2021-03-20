import React, { Component } from 'react';

class RechercheRecette extends Component {

    state = {
        proteines: [

        ]
    };

    componentDidMount() {
        this.getProteines();
     }

    getProteines = () => {
        fetch(`http://localhost:4000/proteines`)
        .then(response => response.json())
        .then(response => this.setState({ proteines: response.data}))
        .catch(err => console.err(err))
    }

    renderProteinesListe = ({id_proteine, libelle_proteine}) => (
        <option value={`${libelle_proteine}`}>{libelle_proteine}</option>
    )

    render(){

        const {proteines} = this.state;

        return (
            

            <div style={{marginTop: '20px'}}>
                <h3>Comment fonctionne notre outil de recherche ?</h3>
                <div id="text_explicative">
                    Pour vos déjeuner ou diner, <b>Frigovide-19</b> vous permet en fonction des quelques ingredients diponible dans votre frigo de trouver une recette adaptée. <br /> 
                    Afin d'utiliser le moteur de recherche ci-dessous veuillez saisir <b>un minimum de 2 ingrédients </b> Une proteine et au maximun 6 autres ingrédients.<br /> 
                    Le résultat correspondra à des recettes ayant matché au moins avec deux ingrédients : la protéine et un autre ingrédients.<br /> 
                </div>
                <div id="formRechercheRecette" style={{marginTop:'30px'}}>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        {proteines.map(this.renderProteinesListe)}
                    </select>
                </div>
                
            </div>
        )
    }



}

export default RechercheRecette;