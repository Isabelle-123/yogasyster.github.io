import React, { Suspense, lazy } from 'react'
import Navbar from './components/navbarFooterFolder/Navbar'
import Footer from './components/navbarFooterFolder/Footer'
import GlobalStyle from './globalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('./components/homeFolder/Home'))
const About = lazy(() => import('./components/aboutFolder/About'))
const Classes = lazy(() => import('./components/classesFolder/Classes'))
const Contact = lazy(() => import('./components/contactFolder/Contact'))

const My404RedirectToNotFound = lazy(() =>
  import('./components/my404Folder/My404RedirectToNotFound')
)
const My404Component = lazy(() =>
  import('./components/my404Folder/My404Component')
)

const App = () => {
  const DefaultRoutes = () => {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/classes' component={Classes} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={My404RedirectToNotFound} />
        </Switch>
        <Footer />
      </>
    )
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Suspense fallback={<div style={{ color: '#8d6262' }}></div>}>
        <Switch>
          <Route component={My404Component} path='/notfound' />
          <Route component={DefaultRoutes} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
