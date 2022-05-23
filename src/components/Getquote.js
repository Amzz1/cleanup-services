import React,{useState} from 'react'
import {TiTick} from 'react-icons/ti'
import {AiOutlineMinus} from 'react-icons/ai'
const Getquote = () => {
    const [formData,setFormData] = useState({property:''})
    const handleChange = (e) =>{
        const {name,value} = e.target
        setFormData(prev=>{
           return {
               ...prev,
               [name]:value
            }
        })
    }
  return (
      <div className='get-quote-page'>
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

    <form className='get-quote-form'>
        <div className='title'>
            <h1>Get quote</h1>
            <h3>Let us know the details of your property and
we’ll provide you with an instant end of lease cleaning quote.</h3>
        </div>
        <div className='item'>
          <div className='title-item'>
             <h5> Property</h5>
             <p>All properties must be unfurnished.</p>
          </div>
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
        <input
        type='radio'
        id='apartment'
        name='property'
        value='apartment'
        checked={formData.property === 'apartment'}
        onChange={handleChange}
        />
        <label htmlFor='studio'>Apartment</label>
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
        


    </form>
 </div>
  )
}

export default Getquote