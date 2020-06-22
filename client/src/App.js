import React from 'react'
import Navbar from './components/navbarFooterFolder/Navbar'
import Footer from './components/navbarFooterFolder/Footer'
import Home from './components/homeFolder/Home'
import About from './components/aboutFolder/About'
import Classes from './components/classesFolder/Classes'
import Contact from './components/contactFolder/Contact'
import My404RedirectToNotFound from './components/my404Folder/My404RedirectToNotFound'
import My404Component from './components/my404Folder/My404Component'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  const DefaultRoutes = () => {
    return (
      <>
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
          <Route component={My404RedirectToNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route component={My404Component} path='/notfound' />
        <Route component={DefaultRoutes} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
