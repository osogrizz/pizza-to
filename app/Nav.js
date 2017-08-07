import React from 'react'
import { NavLink } from 'react-router-dom'
let brand = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/brand.png?alt=media&token=8c719b95-25d2-4ed3-9088-949f7f7a0fda'

export function Nav()  {


  return (
    <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>
      <header className='mdl-layout__header'>
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title"><img src={brand} alt={'img for brand'} style={{width: 100, height: 50}} /></span>
          <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <ul className='nav'>
                <li>
                  <NavLink exact activeClassName='active' to='/'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink  activeClassName='active' to='/about'>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='/press'>
                    Press
                  </NavLink>
                </li>

                <li>
                  <NavLink  activeClassName='active' to='/gallery'>
                    Gallery
                  </NavLink>
                </li>

                <li>
                  <NavLink  activeClassName='active' to='/contact'>
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}
