import React from "react";
import Contact from "./components/Contactfolder/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import MyHistory from "./components/MyHistory";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/MyHistory">
          <MyHistory />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
