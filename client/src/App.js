
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { observer } from 'mobx-react'
import Menu from './components/Menu';
import Acceuil from './components/Acceuil';
import ListeRecettes from './components/ListeRecettes';
import RechercheRecettes from './components/RechercheRecettes';
import ResultatRecherche from './components/ResultatRecherche';
import ErrorPage from './components/ErrorPage';
import New from './components/New';
import DetailRecette from './components/DetailRecette';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route path="/recettes" component={ListeRecettes} />
        <Route path="/recherche-recettes" component={RechercheRecettes} />
        <Route path="/resultat-recherche" component={ResultatRecherche} />
        <Route path="/detail-recette/:id" component={DetailRecette} />
        <Route path="/login" component={Login} />
        <Route path="/new" component={New} />
        <Route component={ErrorPage} />
 
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default observer(App);
