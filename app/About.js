let React = require('react')
let NavLink = require('react-router-dom').NavLink
let brand = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/brand.png?alt=media&token=8c719b95-25d2-4ed3-9088-949f7f7a0fda'

export function About() {
  return (
    <div className='home-container'>
      <NavLink to='/' style={{marginTop: 80}}>
        <img src={brand} alt={'img for brand'}/>
      </NavLink>
    <h2>IT ALL STARTED IN 1903</h2>
    <div className='row'>
      <div className='column'>
      <h2 className='column-label'>About Totonno's</h2>
        <p>At Totonno’s Pizzeria Napolitana in Coney Island, pizzas have been made in the same way in the same spot since 1924.  Anthony (Totonno) Pero, grandfather to Louise Ciminieri, Frank Balzano, Antoinette (Annette)  Balzano, and great grandfather to Lawrence Ciminieri, immigrated from Naples and began making pizzas for Lombardi’s grocery store on Spring Street in Manhattan.  Because of Totonno’s work, Lombardi’s became the first licensed pizzeria in America and Totonno became the first pizzaiolo.<br/><br/>


Eighty nine years later, the grandchildren continue to operate the restaurant making Totonno’s of Coney Island the oldest, continually run, family-owned pizzeria in America, and possibly the world.  Louise’s (Cookie) passion, dedication, and old world mindset kept the legacy of her grandfather continuing into the next century.
<br/><br/>
Many hardships were faced throughout the years…including two major fires and Hurricane Sandy, which by the way, visited 20 months after Totonno’s reopened from the second fire.  But, the family always found a way to rebuild with the help of many friends and supporters.  Totonno’s owners were overwhelmed to receive a call from the owners of Geja’s Café in Chicago and was told that they would raise money at their restaurant for the benefit of Totonno’s rebuilding efforts.  In the beginning of January 2013, Totonno’s received a check from Jeff Lawler, the owner, and Totonno’s was able to purchase their dough machine.  So in essence, Annette said “their dough permitted us to make our dough”. The Totonno family will be forever grateful to the staff and patrons of their friends in Chicago, among the many others who lent their support.<br/><br/>

And today, the Totonno Family, along with Michael Gammone, their long-time pizzaiolo, and Migdalia Catanzaro, his assistant, and with the Lord’s blessings…the Family has much gratitude to be able to carry on their grandfather’s legacy and his Neapolitan traditions.

In addition to using the finest ingredients imported from Italy, handmade mozzarella, and daily made dough (never refrigerated), the real secret is believed to be Passion.  Passion for grandpa’s hard work and resiliency during difficult times, passion for tradition, (mostly nothing every changes down to the nails in the walls), and passion for having that “never give up attitude”.

Included, among others, such as Pete Wells, Ed Levine, Daniel Young, Luigi Veronelli, Zagat says:<br/><br/>

             “Only God Makes Better Pizza”<br/>
             “Best Pizza in New York, Possibly the World”<br/>
             “The Ultimate”<br/>
             <br/><br/>
Among celebrities who second Totonno’s excellence, are Mariano Rivera, Seymour Stein (discovered Madonna),  Michael Bloomberg, Marisa Tormei, Cindy Lauper, Rob Reiner, Donna Hanover, Johnny Maestro, Michael Imperiale, Cecil Fielder, Marty Markowitz, Rudy Guiliani, Danny Devito, and Tony Sirico.
<br/><br/>
In 2009, Totonno’s was awarded one of the highest awards in the culinary industry….the James Beard Award-- in the category of America’s Classics.

Others include:
Award of Distinction…NYC Restaurants….Zagat
City’s Best…by City Guide
Restaurant of Distinction….Mayor Dinkins

Featured in various books and magazines…most recently “J’aime New York:  150 Culinary Destinations” by Alain Ducasse and “Peninsula” Magazine…Seymour Stein.</p>
</div>
<div className='column'>
<h2 className='column-label'>History</h2>
      <p>
        1903 - Anthony (Totonno) Pero comes to America and begins working at Lombardi’s in Little Italy.
        <br/><br/>

1924 - Totonno’s opens in Coney Island. Totonno marries Antoinette Coppola, who become the parents of Pasquale (Freddy), Aida-- Totonno’s love for the Opera-- (Edith), Julia, and Gennaro (Jerry).  Jerry was taught to make pies in the 1950’s, when Totonno became ill, and remained the sole pie maker until the 1990’s. Freddy worked the kitchen, and Julia, the front end of the restaurant.  Edith was the only sibling to marry and have three children (Cookie, Frankie, and Annette), and she worked for some years on weekends.
<br/><br/>

1970's - In the early 70’s, Cookie worked as a waitress at Totonno’s, and Uncle Jerry trained her to make pizza.  Louise married Joel Ciminieri and had a son, Lawrence, in 1968.  Frank worked for Verizon, and Annette was a teacher.
<br/><br/>
1994 - Jerry passes away, and the business is at the helm of Louise, with help from her husband, Joel, and son Lawrence -they both had also been taught to make pies from Uncle Jerry.
<br/><br/>
1997 - Totonno’s suffers a fire…to be reopened 3 months later.
<br/><br/>
2004 - Louise’s husband, Joel Ciminieri, passes away, and son, Lawrence, takes over for his dad.
<br/><br/>
2009 - Totonno’s suffers a major fire, closing the restaurant for 11 months.  Frank and Annette become more involved in the operation of Totonno’s.
<br/><br/>
2012 - Sandy strikes, closing Totonno’s for 5 months.
<br/><br/>
2013 - Totonno's reopens and is back in business!
      </p>
    </div>
  </div>
</div>
  )
}
