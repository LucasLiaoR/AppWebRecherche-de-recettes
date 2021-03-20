
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import Acceuil from './components/Acceuil';
import ListeRecettes from './components/ListeRecettes';
import RechercheRecettes from './components/RechercheRecettes';
import ErrorPage from './components/ErrorPage';
import New from './components/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <Switch>
        <Route exact path="/" component={Acceuil} />
        <Route path="/recettes" component={ListeRecettes} />
        <Route path="/rechercherecettes" component={RechercheRecettes} />
        <Route path="/new" component={New} />
        <Route component={ErrorPage} />
 
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
