import React,{useState} from 'react'
import {TiTick} from 'react-icons/ti'
import {AiOutlineMinus} from 'react-icons/ai'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context'
const Getquote = () => {
    const [formData,setFormData] = useState({property:'apartment'})
    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(prev=>{
           return {
               ...prev,
               [name]:value
            }
        })
    }

   const {           
    bedroom,
    setBedroom,
    other,
    setOther,
    bathroom,
    setBathroom,
    laundry,
    setLaundry,
    balcony,
    setBalcony,
    garage,
    setGarage
    ,subtotal,
    discount,
    total
} = useGlobalContext()

const [sidebar,setSidebar] = useState(false)
const handleSubmit = (e)=>{
  e.preventDefault()
  setSidebar(true)
}
  return (
    <div className='hola'>  <div className={` ${sidebar?'sidebar ':'no-show'}`}>
         <div className={`receipt`}>
           <h1>Quote</h1>
           <div className='categories'>
             <div className='category'>
               <div className='receipt-item'>
                 <div>{formData.property}</div>
                 <small>1</small>
               </div>
             </div>

             <div className='category'>
               <div className='receipt-item'>
                 <div>Bedroom</div>
                 <small>{bedroom}</small>
               </div>
               <div className='receipt-item'>
                 <div>Other</div>
                 <small>{other}</small>
               </div>
               <div className='receipt-item'>
                 <div>Bathroom</div>
                 <small>{bathroom}</small>
               </div>
               <div className='receipt-item'>
                 <div>Laundry</div>
                 <small>{laundry}</small>
               </div>
               <div className='receipt-item'>
                 <div>Balcony</div>
                 <small>{balcony}</small>
               </div>
               <div className='receipt-item'>
                 <div>Garage</div>
                 <small>{garage}</small>
               </div>
             </div>

             <div className='category'>
               <div className='receipt-item'>
                 <div>subtotal</div>
                 <small>${subtotal}</small>
               </div>
               <div className='receipt-item'>
                 <div>discount(10% off)</div>
                 <small>${discount}</small>
               </div>
               <div className='receipt-item'>
                 <div>total</div>
                 <small>${total}</small>
               </div>
             </div>
           </div>

           <div className='out'>
             <button className='out-btn' onClick={()=>setSidebar(false)}> <HiOutlineArrowNarrowLeft/>back</button>
            <Link to='/nothing'> <button className='out-btn check-btn'>check out <HiArrowNarrowRight/></button></Link>
           </div>


         </div>
         
       </div>
    <div className='get-quote-page'>

        <div className=" quote title-quote">
           <h1>Our Cleaning Checklists</h1>
           <h3>Our end of lease cleaning checklist covers all the important details
           that your real estate agent is looking for.</h3>
        </div>
       <div className='checklist'>
  
  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Rooms</h3>
         <p>includes all bedrooms, kitchens, bathrooms and hallways where applicable</p>
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>vacuum, sweep, or mop floors</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean cupboards, shelves, and drawers</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean wardrobe mirrors, frame and tracks</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>wash internal windows, sills, and tracks</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>detail door frames</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean light switches and power points</div>
     <div className='tick end'><AiOutlineMinus/></div>
     <div className='jobs end'>Add-ons: carpet steam cleaning, wall washing, blind cleaning, external window washing, appliance deep cleaning</div>
  </div>

  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Kitchen</h3>
        
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean oven (interior + exterior)</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean stovetop</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>degrease range hood</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean bench top surfaces</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean backsplash</div>
     <div className='tick end'><TiTick/></div>
     <div className='jobs end'>clean sink, handles and spout</div>

  </div>

  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Bathroom</h3>
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>wash tiled surfaces</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean bathtubs and basins</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean shower glass</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean shower head and faucets</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean and disinfect toilets</div>
     <div className='tick end'><TiTick/></div>
     <div className='jobs end'>clean vanity, handles and spout</div>

  </div>
  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Laundry</h3>
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>vacuum, sweep, or mop floors</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>wipe down washer and dryer surfaces</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>remove dryer lint</div>
     <div className='tick end'><TiTick/></div>
     <div className='jobs end'>clean sink, handles, and spout</div>


  </div>
  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Balcony</h3>
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>sweep and mop floors</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>wash window, sills and tracks</div>
     <div className='tick end'><TiTick/></div>
     <div className='jobs end'>wash sliding patio doors</div>
  </div>
  <div className='rooms list-jobs'>
     <div className='places'>
         <h3>Garage</h3>
     </div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>sweep floors</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>clean cupboards, shelves, and drawers</div>
     <div className='tick'><TiTick/></div>
     <div className='jobs'>wash sliding patio doors</div>
     <div className='tick end'><TiTick/></div>
     <div className='jobs end'>remove cobwebs</div>
  </div>

       </div>

    <form className='get-quote-form' onSubmit={handleSubmit}>
        <div className='title'>
            <h1>Get quote</h1>
            <h3>Let us know the details of your property and
             we’ll provide you with an instant end of lease cleaning quote.</h3>
        </div>
        <div className='item'>
          <div className='title-item'>
             <h5> Rooms</h5>
             <p>Other rooms should include any dining, family, sun, or study rooms.</p>
          </div>
          <div className='choices'>
             <div className='choice'> 
               <input
                 type='radio'
                 id='studio'
                 name='property'
                 value='studio'
                 checked={formData.property === 'studio'}
                 onChange={handleChange}
                 />
              <label htmlFor='studio'>Studio</label>
             </div>
            <div className='choice'>
              <input
                 type='radio'
                 id='apartment'
                 name='property'
                 value='apartment'
                 checked={formData.property === 'apartment'}
                 onChange={handleChange}
                 />
              <label htmlFor='studio'>Apartment</label>
            </div>
        
            <div className='choice'>
              <input
                type='radio'
                id='house'
                name='property'
                value='house'
                checked={formData.property === 'house'}
                onChange={handleChange}
                />
              <label htmlFor='studio'>House</label>
              </div>
        
          </div>
        </div>
        <div className='item'>
          <div className='title-item'>
             <h5> Property</h5>
             <p>All properties must be unfurnished.</p>
          </div>
          <div className='choices'>
              <div className='choice'>
                  <label htmlFor='bedroom'>Bedroom</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={bedroom}
        min='0'
        max='9'
        onChange={(e)=> setBedroom(e.target.value)}
        />
              </div>
              <div className='choice'>
                  <label htmlFor='bedroom'>Other</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={other}
        min='0'
        max='9'
        onChange={(e)=> setOther(e.target.value)}
        />
              </div>
              <div className='choice'>
                  <label htmlFor='bedroom'>Bathroom</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={bathroom}
        min='0'
        max='9'
        onChange={(e)=> setBathroom(e.target.value)}
        />
              </div>
            
      
        
        </div>
  </div>
     

  <div className='item'>
          <div className='title-item'>
             <h5> Amenities</h5>
             <p>Balconies include 1 set of sliding doors.
                  Additional entrances should be considered as separate balconies</p>
          </div>
          <div className='choices'>
              <div className='choice'>
                  <label htmlFor='bedroom'>Laundry</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={laundry}
        min='0'
        max='9'
        onChange={(e)=> setLaundry(e.target.value)}
        />
              </div>
              <div className='choice'>
                  <label htmlFor='bedroom'>Balcony</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={balcony}
        min='0'
        max='9'
        onChange={(e)=> setBalcony(e.target.value)}
        />
              </div>
              <div className='choice'>
                  <label htmlFor='bedroom'>Garage</label>
          <input
        type='number'
        id='bedroom'
        name='property'
        value={garage}
        min='0'
        max='9'
        onChange={(e)=> setGarage(e.target.value)}
        />
              </div>
            
      
        
        </div>
  </div>
        
<button  className='quote-btn'>get a quote</button>
    </form>




 </div>
 </div>
  )
}

export default Getquote