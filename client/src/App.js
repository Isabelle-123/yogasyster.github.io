import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/homeFolder/Home'
import About from './components/aboutFolder/About'
import Classes from './components/classesFolder/Classes'
import Contact from './components/contactFolder/Contact'
import My404RedirectToNotFound from './components/my404Folder/My404RedirectToNotFound'
import My404Component from './components/my404Folder/My404Component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Normalize } from 'styled-normalize'

function App() {
  const DefaultRoutes = () => {
    return (
      <>
        <Normalize />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}>
            <Home />
          </Route>
          <Route path='/about' component={About}>
            <About />
          </Route>
          <Route path='/classes' component={Classes}>
            <Classes />
          </Route>
          <Route path='/contact' component={Contact}>
            <Contact />
          </Route>
          <Route component={My404RedirectToNotFound} />
        </Switch>
      </>
    )
  }

  return (
    <BrowserRouter>
      <Normalize />
      <Switch>
        <Route component={My404Component} path='/notfound' />
        <Route component={DefaultRoutes} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
