import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import WelcomeBody from "./WelcomeBody.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={WelcomeBody} />
    </Router>
  );
}

export default App;
