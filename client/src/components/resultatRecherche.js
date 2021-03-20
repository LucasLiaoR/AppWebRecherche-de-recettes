import React from 'react';


class ResultatRecherche {

    state = {
        resultatRecherche: [],


    }
    componentDidMount() {

    }

    getResultatRecherche = () => {
        fetch(`http://localhost:4000/recherche`)
        .then(response => response.json())
        .then(response => this.setState({ proteines: response.data}))
        .catch(err => console.err(err))
    }

    render() {
        return (
            <div id="resultatRecherche">
                <div>




                </div>

            </div>
        )
    }


}

export default ResultatRecherche;