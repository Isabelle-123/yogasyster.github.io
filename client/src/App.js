import React from 'react'
import Contact from './components/contactFolder/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Classes from './components//classesFolder/Classes'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Normalize } from 'styled-normalize'

function App() {
  const NoMatchPage = () => {
    return <h3>404 - Not found</h3>
  }

  return (
    <>
      <Normalize />
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/classes'>
            <Classes />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route component={NoMatchPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
