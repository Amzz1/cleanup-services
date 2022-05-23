import React from 'react'
import { useGlobalContext } from '../context'
import PanelLocation from './PanelLocation'
import PanelResources from './PanelResources'
import PanelServices from './PanelServices'
import Clean1 from '../image/clean1.webp'
import Clean2 from '../image/clean2.webp'
import Clean3 from '../image/clean3.webp'
const Main = () => {
    const {isPanelLocationOpen,isPanelServicesOpen,isPanelResourcesOpen} = useGlobalContext()
  return (
<div className="main">
    {isPanelLocationOpen&& <PanelLocation/>}
    {isPanelServicesOpen && <PanelServices/>}
    {isPanelResourcesOpen && <PanelResources/>}
    <div className="home-bg">
      <div className="feature-content">
        <h1>You move out, we clean up.</h1>
        <h3>The simplest way to get your bond back. Guaranteed.*</h3>
      </div>
      <img className="bg-img1" src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/hero-background-homepage.svg" alt="str"/>
      <img className="bg-img2" src="https://thisisneat.com.au/wp-content/uploads/2020/01/bond-cleaning-customers.svg" alt="sth"/>
    </div>

    <div className="services">
      <div className="services quote">
        <h1>Our Services</h1>
        <h3>Dependable, professional, and experienced. Choose from any
          of our bond cleaning services and we’ll handle the rest.</h3>
      </div>

     <div className="cards">
      <div className="card mb-5" >
        <img src={Clean1} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-text">End of Lease Cleaning</h4>
          <p className="card-text">With our famous 72-hour bond back guarantee*, our cleaners always ensure tenants recover their full rental deposits.</p>

        </div>
       <span className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></span>
      </div>


      <div className="card mb-5 ">
        <img src={Clean2} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4>Vacate Cleaning</h4>
          <p className="card-text">Our 5-star rated cleaners specialise in helping renters pass their final vacate inspections.</p>
        </div>
        <span className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></span>

      </div>

      <div className="card mb-5" >
        <img src={Clean3} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4>Moving Cleaning</h4>
          <p className="card-text">Our cleaning teams will make sure your property is ready for sale, a rental inspection, or for your family to move into.</p>
        </div>
        <span className="learn-more"> <button>learn more</button> <i className="fa-solid fa-arrow-right"></i></span>

     </div>
    </div>

    <div className="review">
      <div className="review quote">
        <h1>Our Reviews</h1>
        <h3>We believe our work speaks for itself, but our customers vouch for us too.
          Here’s just a few of the reviews that make up our 4.8 star rating on 
          <a href="https://www.google.com.au/search?rlz=1C5CHFA_enAU763AU763&ei=dk3SXJjpC4ao_QbswquQAQ&q=this+is+neat+cleaning+sydney&oq=this+is+neat+cleaning+sydney&gs_l=psy-ab.3..33i21.13806.14467..14553...0.0..0.218.892.0j4j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.ySpCyBxpw1Q#lrd=0x6b12b9f8d4ae6a43:0x4d6a4d6ebad0981f,1,,,">Google</a>.</h3>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

        </div>
        <div className="carousel-inner container-car">
          <div className="carousel-item active car">
            <img src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-4.svg" className="d-block w-25 mx-auto " alt="..."/>
            <span>Hayley M.
            </span>
            <p className="d-block mx-auto">Wonderful service, easy online booking, clear and transparent pricing from the start. They sent text updates with time of arrival and finishing,
             about an hour after finishing I got sent a detailed email with before and after pictures. My real estate could not fault the cleaning and I received my full bond refund 48hrs after the final inspection. Very happy with the service, could not fault!</p>
          </div>
          <div className="carousel-item car">
            <img src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-3.svg" className="d-flex w-25  mx-auto" alt="..."/>
            <span>Kristy T.</span>
            <p className="d-flex mx-auto">The team did an excellent job - I was very impressed. Had no problem getting my bond back. Thank you! May be in touch for a spring clean down the track.</p>

          </div>
        
          <div className="carousel-item car">
            <img src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-male-1.svg"className="d-flex w-25 mx-auto" alt="..."/>
            <span>Adrian S.</span>
            <p className="d-flex mx-auto">These guys did the end of lease clean for us and it was awesome. They gave a timeslot of an hour for arrival but arrived right at the start of that.
             They did a fantastic job of cleaning and afterwards sent through a before and after picture of all areas of the flat which I’ve never had from a cleaning company before.</p>

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    </div>
</div>
  )
}

export default Main