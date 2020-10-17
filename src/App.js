import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Detail from "./router/Detail";
import About from "./router/About";
import Navigation from "./components/Navigation";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;