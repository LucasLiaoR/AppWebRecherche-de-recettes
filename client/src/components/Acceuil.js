import React from 'react';
import homeImageOne from '../resources/homeImageOne.png';
import '../App.css'

const Acceuil = () => {

    return (
        <div style={{marginTop:'30px'}}>
            <div style={{width: '100%'}}>
                <img src={homeImageOne} className="homeImageOne" alt=""/>
            </div>

            <div className="description" id="description">

                <h1 className="b-center" style={{color:'#006400'}}>Frigo Vide ?</h1><br />

                <p className="b-large">FrigoVide-19.fr, c'est un site gratuit et communautaire sur lequel vous pourrez trouver des recettes correspondant exactement à vos besoins: indiquez les ingrédients que vous possédez dans votre Frigo et hop la magie opère. <br />
                Nous vous proposons une recette utilisant les ingrédients disponible chez vous. <br />
                <strong> Avec FrigoVide-19.fr, vous économisez du temps et de l'argent et surtout vous évitez le gâchis ! </strong><br />
                FrigoVide-19.fr est la solution la plus simple lorsque vous ne savez pas quoi cuisiner ce soir ou si vous vous demandez "que cuisiner avec ce que j'ai dans mon frigo".<br />
                </p>

                <p>Cuisinez des recettes simples et rapides, en 4 étapes :</p>
                
                <ul>
                    <li> Nous avons pré-sélectionné une liste d’ingrédients : ajustez-la à partir des produits de votre frigo et de vos placards.</li>
                    <li> Sélectionnez le produit que vous souhaitez manger puis une recette dans la liste proposée.</li>
                    <li> Suivez les instructions de la recette.</li>
                    <li> Dégustez !</li>
                </ul>
            </div>




        </div>
    )
}

export default Acceuil;