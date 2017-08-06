import React from 'react'
import { NavLink } from 'react-router-dom'
let brand = 'app/images/brand.png'
import Gallery from 'react-grid-gallery'

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


const IMAGES =
  [
    {
      src: 'app/images/gallery1.jpg',
      thumbnail: 'app/images/gallery1.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery2.jpg',
      thumbnail: 'app/images/gallery2.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery3.jpg',
      thumbnail: 'app/images/gallery3.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery4.jpg',
      thumbnail: 'app/images/gallery4.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery5.jpg',
      thumbnail: 'app/images/gallery5.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery6.jpg',
      thumbnail: 'app/images/gallery6.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery7.jpg',
      thumbnail: 'app/images/gallery7.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery8.jpg',
      thumbnail: 'app/images/gallery8.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery9.jpg',
      thumbnail: 'app/images/gallery9.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery10.jpg',
      thumbnail: 'app/images/gallery10.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery11.jpg',
      thumbnail: 'app/images/gallery11.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery12.jpg',
      thumbnail: 'app/images/gallery12.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery13.jpg',
      thumbnail: 'app/images/gallery13.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery14.jpg',
      thumbnail: 'app/images/gallery14.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery15.jpg',
      thumbnail: 'app/images/gallery15.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery16.jpg',
      thumbnail: 'app/images/gallery16.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery17.jpg',
      thumbnail: 'app/images/gallery17.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery18.jpg',
      thumbnail: 'app/images/gallery18.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery19.jpg',
      thumbnail: 'app/images/gallery19.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery20.jpg',
      thumbnail: 'app/images/gallery20.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery21.jpg',
      thumbnail: 'app/images/gallery21.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery22.jpg',
      thumbnail: 'app/images/gallery22.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery23.jpg',
      thumbnail: 'app/images/gallery23.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery24.jpg',
      thumbnail: 'app/images/gallery24.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery25.jpg',
      thumbnail: 'app/images/gallery25.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery26.jpg',
      thumbnail: 'app/images/gallery26.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery27.jpg',
      thumbnail: 'app/images/gallery27.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery28.jpg',
      thumbnail: 'app/images/gallery28.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery29.jpg',
      thumbnail: 'app/images/gallery29.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery30.jpg',
      thumbnail: 'app/images/gallery30.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery31.jpg',
      thumbnail: 'app/images/gallery31.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery32.jpg',
      thumbnail: 'app/images/gallery32.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery33.jpg',
      thumbnail: 'app/images/gallery33.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery34.jpg',
      thumbnail: 'app/images/gallery34.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'app/images/gallery35.jpg',
      thumbnail: 'app/images/gallery35.jpg',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
  ]



export class GalleryCarousel extends React.Component {

  render() {
    return (

      <div className='home-container'>

        <NavLink to='/' style={{marginTop: 80}}>
          <img src={brand} alt={'img for brand'} />
        </NavLink>

        <div>
          <img src={this.IMAGES} />
          <Gallery images={IMAGES}  backdropClosesModal={true} />
        </div>

      </div>
    )
  }
}
