import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WelcomeBody from "./WelcomeBody.js";
import FormBody from "./FormBody";
import SearchBody from './SearchBody';
import Products from './Products'
import { Provider } from "react-redux";
import store from "../redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={WelcomeBody} />
          <Route path="/subscribe" component={FormBody} />
          <Route path="/search" component={SearchBody} />
          <Route path="/products" component={Products} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;