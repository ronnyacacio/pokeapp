import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import Pokeball from './pages/Pokeball';
import PokeArena from './pages/PokeArena';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Pokémon WTISC
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pokedex" className="nav-link">
                  Pokédex
                </Link>
              </li>
              <li>
                <Link to="/pokeball" className="nav-link">
                  Pokéball
                </Link>
              </li>
              <li>
                <Link to="/pokearena" className="nav-link">
                  PokéArena
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/pokeball" component={Pokeball} />
          <Route path="/pokearena" component={PokeArena} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
