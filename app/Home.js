let React = require('react')
let brand = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/brand.png?alt=media&token=8c719b95-25d2-4ed3-9088-949f7f7a0fda'
let pizza = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/pizza.jpg?alt=media&token=611e0578-247e-4d60-b68a-1615b64cd9da'
let storefront = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/store-front.jpg?alt=media&token=33842b2a-5759-4fe1-801f-c3cdca5ae7a9'





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
