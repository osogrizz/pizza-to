import React from 'react'
import TweenLite from 'gsap'
import scrollTo from '../node_modules/gsap/ScrollToPlugin'

export class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e) {
    TweenLite.to(window, 0.9, {scrollTo: 0})


  }


  render() {


    return (
      <footer className='mdl-mini-footer'>

        <div className='mdl-mini-footer__left-section'>
          <div className='mdl-logo'>Totonno's © 2017</div>
        </div>

        <div className='mdl-mini-footer__middle-section'>
          <a type='submit' value='Submit' className='scroll' onClick={this.handleScroll}>
            <i id='up' className="material-icons">keyboard_arrow_up</i>
          </a>
        </div>



        <div className='mdl-mini-footer__right-section'>
            <div className='mdl-logo'>A Website by - BobaBird Studios</div>
        </div>


      </footer>
    )
  }
}
