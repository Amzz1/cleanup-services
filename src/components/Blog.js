import React from 'react'
import { Link } from 'react-router-dom'
import Blog1 from '../image/blog1.webp'
import Blog2 from '../image/blog2.webp'
import Blog3 from '../image/blog3.webp'
import Blog4 from '../image/blog4.webp'
import Blog5 from '../image/blog5.webp'
import Blog6 from '../image/blog6.webp'
import Blog7 from '../image/blog7.webp'
import Blog8 from '../image/blog8.webp'
import Blog9 from '../image/blog9.webp'
import Blog10 from '../image/blog10.webp'
import Blog11 from '../image/blog11.webp'
import Blog12 from '../image/blog12.webp'

const Blog = () => {
  return (
    // <div>
    <div className="cards">
      <div className="card mb-5" >
        <img src={Blog1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How to Move with Pets</h4>
          <p className="card-text">Maybe it was laughing uncontrollably while your kitten tried catnip for the first time or secretly teaching your puppy how…</p>

        </div>
       <Link to='/this-is-neat/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How Do You Move By Yourself?</h4>
          <p className="card-text">Moving homes is rarely uneventful and if you've read our Ultimate Moving House Checklist, you know just how big of…</p>

        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">The Ultimate Moving House Checklist</h4>
          <p className="card-text">Moving isn't as simple as packing all of your belongings and driving over to your new apartment. In fact, it…</p>

        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog4} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How to Pack for a Move</h4>
          <p className="card-text">Getting ready for the big move? While it may be easy to let your mind wander to life in your…</p>

        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog5} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How to Break a Rental Lease Early</h4>
          <p className="card-text">Whatever circumstance you find yourself in, breaking your lease early can be an intimidating experience. Whether if its financial difficulties,…</p>

        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog6} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">The Ultimate Moving Overseas Checklist</h4>
          <p className="card-text">Planning to move overseas, to a new country, or out of state? It might not be as romantic as packing…</p>

        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog7} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">What's the Price of an End of Lease Clean?</h4>
          <p className="card-text">Maybe you've read our previous Q & A article, How Much is a Bond Clean? and still feel as though your…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog8} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How to Compare Suburbs for First Time Home Buyers</h4>
          <p className="card-text">Our customers move out for many reasons, but nothing is as heartwarming as seeing a young couple move into their…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog9} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">Where Do You Find Cardboard Moving Boxes?</h4>
          <p className="card-text">You’ve been super organised and are now onto the packing stage of our moving checklist. But before you can even…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog10} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">Can I Move Furniture with an Uber?</h4>
          <p className="card-text">You’ve spent months searching for rental properties and finally found the perfect little studio in Glebe. With so few possessions…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog11} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How Long Should It Take To Move House?</h4>
          <p className="card-text">If your lease is about to expire and you find yourself asking, “How long should it take to move house?”,…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
      <div className="card mb-5" >
        <img src={Blog12} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">How to Transport a Fridge the Right Way</h4>
          <p className="card-text">It might be your first move or your very last, but you always seem to be doing the exact same…</p>
        </div>
        <Link to='/nothing' className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
    // </div>
  )
}

export default Blog