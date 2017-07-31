let React = require('react')
let brand = 'app/images/brand.png'
let pizza = 'app/images/pizza.jpg'
let storefront = 'app/images/store-front.jpg'





export class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>

        <img src={brand} alt={'img for brand'} className='page-content' style={{marginTop: 90}}/>

        <img src={pizza} alt={'img for pizza'} className='page-content'/>

        <h1>Welcome to Totonno's Pizzeria</h1><h1>Napolitana!</h1>

        <p>
          The Totonno's family has been making the best pizza in NYC for over 89 years. Our philosophy is simple: as long as there's dough, we will bake you the best pizza, with the finest ingredients.
        </p>

        <p>
          Come over and see for yourself why Zagat, the New York Times, and the James Beard Foundation have awarded Totonno's Pizzeria Napolitana as the best pizza in New York City, and probably the world!
        </p>

        <img src={storefront} alt={'img for store-front'}/>

      </div>
    )
  }
}
