import React from "react";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Components
import HomePage from "../../containers/Home/Home";
import Navbar from "../Navbar/Navbar";
import Favorites from "../../containers/Favourites/Favorites";
import RandomBeer from "../../containers/RandomBeer/RandomBeer";
import Wallet from "../../containers/Wallet/Wallet";
import WalletLogin from "../../containers/WalletLogin/WalletLogin";
//Redux
import { useSelector } from "react-redux";

const App = () => {
  const { isSignedIn } = useSelector((state) => state.user);

  return (
    <div>
      {!isSignedIn ? <Redirect to="/wallet-login" /> : null}
      {isSignedIn ? <Navbar /> : null}
      <Switch>
        <Route exact path="/wallet-login" component={WalletLogin} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/beers" component={HomePage} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/wallet" component={Wallet} />
        {isSignedIn ? <Redirect push exact from="/" to="/beers" /> : null}
      </Switch>
    </div>
  );
};

export default App;
