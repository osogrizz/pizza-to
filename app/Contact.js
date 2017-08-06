import React from 'react'
import  { NavLink } from 'react-router-dom'
let brand = 'app/images/brand.png'


export class Contact extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      first: '',
      last: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    const target = e.target
    const name = target.name
    const i = this.state

    alert(`${i.first} ${i.last} \n @ ${i.email} \n says: ${i.message}` )

    e.preventDefault()
  }

  componentDidMount() {
    componentHandler.upgradeDom()
  }

  render() {
    const mapStyle = {
     width: 650,
     height: 340,
   }

    return (
      <div className='home-container'>
        <NavLink exact to='/' style={{marginTop: 80}}>
          <img src={brand} alt={'img for brand'} />
        </NavLink>

        <div className='row'>
          <div className='column'>
            <h2 className='column-label'>Totonno's Pizzeria Napolitana</h2>

              <p>1524 Neptune Avenue
                 Brooklyn, NY  11224 -
                Tel: (718) 372-8606
               <br/><br/>
             </p>
             <div className='row-small'>
               <div className='column-small'>
                 <p>
                     OPEN:<br/>
                     Thursday through Sunday<br/>
                     Noon to 8 p.m. (last seating 7:30 p.m.)
                   </p>
                </div>
                <div className='column-small'>
                  <p>
                     CLOSED:<br/>
                     Monday, Tuesday, Wednesday<br/>
                    No credit cards accepted. -
                   </p>
               </div>

             </div>


               <div className='column'>
                 <iframe  style={mapStyle}
                   src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDb9hOrVFwokRkpRqzb71OdM&key=AIzaSyA7Dg_S27xwPBKSUJ5ZI1JajvSDrLAv5vU"
                   allowFullScreen>
                 </iframe>
               </div>

            </div>


             <div className='column'>
               <h2 className='column-label'>Questions? Feel free to email us.</h2>
               <div className='form-container'>
                 <form onSubmit={this.handleSubmit}>

                   <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                     <input className='names mdl-textfield__input' type='text' id='first-name'
                            name='first'
                            value={this.state.first}
                            onChange={this.handleChange}
                     />
                     <label className='mdl-textfield__label' htmlFor='first-name'>First...</label>
                   </div>

                   <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                     <input  className='names mdl-textfield__input' type='text' id='last-name'
                             name='last'
                             value={this.state.last}
                             onChange={this.handleChange}
                     />
                     <label className='mdl-textfield__label' htmlFor='last-name'>Last...</label>
                   </div>


                   <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                     <input className='mdl-textfield__input' id='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                     />
                     <label className='mdl-textfield__label' htmlFor='Email'>Email...</label>
                   </div>

                   <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>
                       <textarea className='mdl-textfield__input' type='text' rows='4' id='message'
                                 name='message'
                                 value={this.state.message}
                                 onChange={this.handleChange}
                       >

                       </textarea>
                       <label className='mdl-textfield__label' htmlFor='message'>Message</label>
                   </div>

                   <br/><br/>
                   <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent'
                           type='submit'
                           value='Submit'
                   >
                     Submit
                   </button>
                 </form>
               </div>


             </div>
           </div>

         </div>
    )
  }
}

// componentDidMount() {
//   let totonnos = {lat: 40.5789173,lng: -73.9838232}
//   this.map = new google.maps.Map(this.refs.map, {
//      center: totonnos,
//      zoom: 14
//   })
//   let marker = new google.maps.Marker({
//     position: totonnos,
//     map: this.map
//   })
// }
