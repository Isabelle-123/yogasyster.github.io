import React from 'react';
import Contact from './components/contactFolder/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyHistory from './components/MyHistory';
import Classes from './components//classesFolder/Classes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Normalize } from 'styled-normalize';

function App() {
  return (
    <>
      <Normalize />
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/myhistory'>
            <MyHistory />
          </Route>
          <Route path='/classes'>
            <Classes />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
