import React from 'react'
import { NavLink } from 'react-router-dom'
let brand = 'app/images/brand.png'

  let gallery1 = 'app/images/gallery1.jpg'
  let gallery2 = 'app/images/gallery2.jpg'
  let gallery3 = 'app/images/gallery3.jpg'
  let gallery4 = 'app/images/gallery4.jpg'
  let gallery5 = 'app/images/gallery5.jpg'
  let gallery6 = 'app/images/gallery6.jpg'
  let gallery7 = 'app/images/gallery7.jpg'
  let gallery8 = 'app/images/gallery8.jpg'
  let gallery9 = 'app/images/gallery9.jpg'
  let gallery10 = 'app/images/gallery10.jpg'
  let gallery11 = 'app/images/gallery11.jpg'
  let gallery12 = 'app/images/gallery12.jpg'
  let gallery13 = 'app/images/gallery13.jpg'
  let gallery14 = 'app/images/gallery14.jpg'
  let gallery15 = 'app/images/gallery15.jpg'
  let gallery16 = 'app/images/gallery16.jpg'
  let gallery17 = 'app/images/gallery17.jpg'
  let gallery18 = 'app/images/gallery18.jpg'
  let gallery19 = 'app/images/gallery19.jpg'
  let gallery20 = 'app/images/gallery20.jpg'
  let gallery21 = 'app/images/gallery21.jpg'
  let gallery22 = 'app/images/gallery22.jpg'
  let gallery23 = 'app/images/gallery23.jpg'
  let gallery24 = 'app/images/gallery24.jpg'
  let gallery25 = 'app/images/gallery25.jpg'
  let gallery26 = 'app/images/gallery26.jpg'
  let gallery27 = 'app/images/gallery27.jpg'
  let gallery28 = 'app/images/gallery28.jpg'
  let gallery29 = 'app/images/gallery29.jpg'
  let gallery30 = 'app/images/gallery30.jpg'
  let gallery31 = 'app/images/gallery31.jpg'
  let gallery32 = 'app/images/gallery32.jpg'
  let gallery33 = 'app/images/gallery33.jpg'
  let gallery34 = 'app/images/gallery34.jpg'
  let gallery35 = 'app/images/gallery35.jpg'






export class Gallery extends React.Component {

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (

      <div className='home-container'>

        <NavLink to='/' style={{marginTop: 80}}>
          <img src={brand} alt={'img for brand'} />
        </NavLink>


      <div className='row'>

        <div className='mdl-cell mdl-cel--4-col'>

        <div className='mdl-cell'>
          <div className='gallery demo-card-image mdl-card mdl-shadow--8dp'>
              <img className='gallery-card' src={gallery1} alt={'img for galler1'}/>
          </div>
        </div>


      <div className='mdl-cell'>
        <div className='gallery demo-card-image mdl-card mdl-shadow--8dp'>
          <div className=' mdl-card__media'>
            <img className='gallery-card' src={gallery2} alt={'img for galler2'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery3} alt={'img for galler3'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <img className='gallery-card' src={gallery4} alt={'img for galler4'}/>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery5} alt={'img for galler5'}/>
          </div>
        </div>
      </div>
    </div>

    </div>

    <div className='row'>
      <div className='mdl-cell mdl-cel--4-col'>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery6} alt={'img for galler6'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery7} alt={'img for galler7'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery8} alt={'img for galler8'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery9} alt={'img for galler9'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery10} alt={'img for galler10'}/>
            </div>
          </div>
        </div>

        </div>
    </div>

    <div className='row'>
      <div className='mdl-cell mdl-cel--4-col'>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery11} alt={'img for galler11'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery12} alt={'img for galler12'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery13} alt={'img for galler13'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery14} alt={'img for galler14'}/>
            </div>
          </div>
        </div>

        <div className='mdl-cell'>
          <div className='demo-card-image mdl-card mdl-shadow--8dp'>
            <div className='mdl-card__media'>
              <img className='gallery-card' src={gallery15} alt={'img for galler15'}/>
            </div>
          </div>
        </div>

    </div>
  </div>

  <div className='row'>
    <div className='mdl-cell mdl-cel--4-col'>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery16} alt={'img for galler16'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery17} alt={'img for galler17'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery18} alt={'img for galler18'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery19} alt={'img for galler19'}/>
          </div>
        </div>
      </div>

      <div className='mdl-cell'>
        <div className='demo-card-image mdl-card mdl-shadow--8dp'>
          <div className='mdl-card__media'>
            <img className='gallery-card' src={gallery20} alt={'img for galler20'}/>
          </div>
        </div>
      </div>

  </div>
</div>

<div className='row'>
  <div className='mdl-cell mdl-cel--4-col'>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery21} alt={'img for galler21'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery22} alt={'img for galler22'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery23} alt={'img for galler23'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery24} alt={'img for galler24'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery25} alt={'img for galler25'}/>
        </div>
      </div>
    </div>

  </div>
</div>

<div className='row'>
  <div className='mdl-cell mdl-cel--4-col'>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery26} alt={'img for galler26'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery27} alt={'img for galler27'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery28} alt={'img for galler28'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery29} alt={'img for galler29'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery30} alt={'img for galler30'}/>
        </div>
      </div>
    </div>

  </div>
</div>

<div className='row'>
  <div className='mdl-cell mdl-cel--4-col'>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery31} alt={'img for galler31'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery32} alt={'img for galler32'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery33} alt={'img for galler33'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery34} alt={'img for galler34'}/>
        </div>
      </div>
    </div>

    <div className='mdl-cell'>
      <div className='demo-card-image mdl-card mdl-shadow--8dp'>
        <div className='mdl-card__media'>
          <img className='gallery-card' src={gallery35} alt={'img for galler35'}/>
        </div>
      </div>
    </div>

  </div>
</div>

</div>



    )
  }
}
