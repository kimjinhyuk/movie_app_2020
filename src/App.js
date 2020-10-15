import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;