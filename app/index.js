import React from 'react'
import ReactDOM from 'react-dom'
import {Nav} from './Nav'
import {Home} from './Home'
import {About} from './About'
import {Press} from './Press'
import {GalleryCarousel} from './Gallery'
import {Contact} from './Contact'
import {Footer} from './Footer'
let ReactRouter = require('react-router-dom')
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route
let Switch = ReactRouter.Switch
import './index.css'




class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='container'>
        <Nav />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/press' component={Press} />
          <Route path='/gallery' component={GalleryCarousel} />
          <Route path='/contact' component={Contact} />
          <Route render={function () {
            return  <h1 style={{ paddingTop: 80 }}>Page Not Found.</h1>
          }} />
        </Switch>
        <Footer
          scrollStepInPx='50'
          delay='16.66'
        />
      </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
