import { Route, Router, Switch } from "react-router";
import RandomPokemonPage from "./views/RandomPokemon";
import { createBrowserHistory } from "history";
import Nav from "./components/Navbar";
import InfoPage from "./views/Info";
import { BrowserRouter } from "react-router-dom";

const history = createBrowserHistory();

const App = () => (
  <BrowserRouter basename="React-PokemonApi" history={history}>
    <Nav />
    <Switch>
      <Route exact path="/">
        <RandomPokemonPage />
      </Route>
      <Route exact path="/info">
        <InfoPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;