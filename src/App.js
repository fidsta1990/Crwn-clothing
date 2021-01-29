import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import Shop from "./pages/shop/Shop.jsx";
import SignRegister from "./pages/sign-register/SignRegister";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentDidUnMount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignRegister} />
        </Switch>
      </div>
    );
  }
}

export default App;
