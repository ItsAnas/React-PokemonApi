import { Route, Router, Switch } from "react-router";
import RandomPokemonPage from "./views/RandomPokemon";
import { createBrowserHistory } from "history";
import Nav from "./components/Navbar";
import InfoPage from "./views/Info";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Nav />
    <Switch>
      <Route exact path="/">
        <RandomPokemonPage />
      </Route>
      <Route exact path="/info">
        <InfoPage />
      </Route>
    </Switch>
  </Router>
);

export default App;