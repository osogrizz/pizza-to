let React = require('react')
let NavLink = require('react-router-dom').NavLink
let brand = 'app/images/brand.png'
let press1 = 'app/images/press1.jpg'
let press2 = 'app/images/press2.jpg'
let press3 = 'app/images/press3.jpg'
let press4 = 'app/images/press4.jpg'
let press5 = 'app/images/press5.jpg'
let press6 = 'app/images/press6.jpg'

export function Press() {
  return (
    <div className='home-container'>
      <NavLink to='/' style={{marginTop: 80}}>
        <img src={brand} alt={'img for brand'} />
      </NavLink>

      <h2>Totonno's in the Press!</h2>
      <p>(Click on the links below or the pictures to read the press articles.)</p>

      <div className='row'>



          <div className='mdl-cell mdl-cel--4-col'>
            <div className='mdl-card mdl-shadow--8dp'>

              <div className='press1 mdl-card__media mdl-card--border'>
                <img className='press1' src={press1} alt={'img for press1'}/>
              </div>

              <div className='mdl-card__title '>
                <h3 className='mdl-card__title-text'>Island tie to pizza history named Totonno’s</h3>
              </div>

              <div className="mdl-card__supporting-text">
                <p>by Carole Ann Benanti - Staten Island Advance</p>
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='http://blog.silive.com/inside_out_column/2011/07/island_tie_to_pizza_history_called_totonnos.html' target='_blank'>Read More</a>
                <div className="mdl-layout-spacer"></div>
              </div>

            </div>
          </div>

          <div className='mdl-cell mdl-cel--4-col'>
            <div className='mdl-card mdl-shadow--8dp'>

              <div className='press2 mdl-card__media mdl-card--border'>
                <img className='press2' src={press2} alt={'img for press1'}/>
              </div>

              <div className='mdl-card__title '>
                <h3 className='mdl-card__title-text'>The Spiritual Home of New York Pizza Struggles to Re-Open After Sandy</h3>
              </div>

              <div className="mdl-card__supporting-text">
                <p>by Marco Werman – PRI’s The World</p>
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='https://www.pri.org/stories/2012-12-03/spiritual-home-new-york-pizza-struggles-re-open-after-sandy' target='_blank'>Read More</a>
                <div className="mdl-layout-spacer"></div>
              </div>

            </div>
          </div>

          <div className='mdl-cell mdl-cel--4-col'>
            <div className='mdl-card mdl-shadow--8dp'>

              <div className='press3 mdl-card__media mdl-card--border'>
                <img className='press3' src={press3} alt={'img for press1'}/>
              </div>

              <div className='mdl-card__title '>
                <h3 className='mdl-card__title-text'>After Sandy, Pilgrimages To 'Church Of N.Y. Pizza' On Hold</h3>
              </div>

              <div className="mdl-card__supporting-text">
                <p>by Joel Rose - NPR</p>
              </div>

              <div className="mdl-card__actions mdl-card--border">
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='http://www.npr.org/2013/02/02/170914729/famed-n-y-pizzeria-among-businesses-struggling-to-reopen-after-sandy' target='_blank'>Read More</a>
                <div className="mdl-layout-spacer"></div>
              </div>

            </div>
          </div>



    </div>




    <div className='row'>

      <div className='mdl-cell mdl-cel--4-col'>
        <div className='mdl-card mdl-shadow--8dp'>

          <div className='press4 mdl-card__media mdl-card--border'>
            <img className='press4' src={press4} alt={'img for press1'}/>
          </div>

          <div className='mdl-card__title '>
            <h3 className='mdl-card__title-text'>Famous Coney Island pizza shop Totonno’s reopens for business after damage from Hurricane Sandy</h3>
          </div>

          <div className="mdl-card__supporting-text">
            <p>Sandy by Mark Morales – Daily News</p>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='http://www.nydailynews.com/new-york/brooklyn/famed-coney-pizziereia-totonno-back-article-1.1300672#ixzz2iTtVl1pL' target='_blank'>Read More</a>
            <div className="mdl-layout-spacer"></div>
          </div>

        </div>
      </div>


      <div className='mdl-cell mdl-cel--4-col'>
        <div className='mdl-card mdl-shadow--8dp'>

          <div className='press5 mdl-card__media mdl-card--border'>
            <img className='press5' src={press5} alt={'img for press5'}/>
          </div>

          <div className='mdl-card__title '>
            <h3 className='mdl-card__title-text'>Today Survey: The country's favorite pizza topping is...</h3>
          </div>

          <div className="mdl-card__supporting-text">
            <p>Totonno’s Pizzeria Napolitano took first prize.</p>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='http://www.today.com/food/survey-countrys-favorite-pizza-topping-846447?franchiseSlug=foodmain' target='_blank'>Read More</a>
            <div className="mdl-layout-spacer"></div>
          </div>

        </div>
      </div>

      <div className='mdl-cell mdl-cel--4-col'>
        <div className='mdl-card mdl-shadow--8dp'>

          <div className='press6 mdl-card__media mdl-card--border'>
            <img className='press6' src={press6} alt={'img for press5'}/>
          </div>

          <div className='mdl-card__title '>
            <h3 className='mdl-card__title-text'>Sandy-Ravaged Totonno’s to Get a Helping Hand</h3>
          </div>

          <div className="mdl-card__supporting-text">
            <p>by Pete Wells – The New York Times</p>
          </div>

          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='https://dinersjournal.blogs.nytimes.com/2013/02/07/sandy-ravaged-totonnos-to-get-a-helping-hand/?_r=0' target='_blank'>Read More</a>
            <div className="mdl-layout-spacer"></div>
          </div>

        </div>
      </div>

    </div>

    <div className='mdl-cell mdl-cel--4-col'>
      <div className='mdl-card mdl-shadow--8dp'>

        <div className='press7 mdl-card__media mdl-card--border'>
          {/* <i className="material-icons">wallpaper</i> */}
        </div>

        <div className='mdl-card__title '>
          <h3 className='mdl-card__title-text'>Restoring Our Church of Pizza: The Rebuilding and Repairing of Totonno's After Hurricane Sandy</h3>
        </div>

        <div className="mdl-card__supporting-text">
          <p>by Chris E. Crowley – Serious Eats</p>
        </div>

        <div className="mdl-card__actions mdl-card--border">
          <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='http://slice.seriouseats.com/archives/2012/12/rebuilding-the-church-of-pizza-totonnos-and-hurricane-sandy.html?ref=thumb' target='_blank'>Read More</a>
          <div className="mdl-layout-spacer"></div>
        </div>

      </div>
    </div>



  </div>
  )
}
