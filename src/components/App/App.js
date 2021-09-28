import React from "react";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Style
import "./App.scss";
// Components
import HomePage from "../../containers/Home/Home";
import Navbar from "../Navbar/Navbar";
import Favorites from "../../containers/Favourites/Favorites";
import RandomBeer from "../../containers/RandomBeer/RandomBeer";
import Wallet from "../../containers/Wallet/Wallet";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Redirect push exact from="/" to="/beers" />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/beers" component={HomePage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/wallet" component={Wallet} />
      </Switch>
    </div>
  );
};

export default App;
