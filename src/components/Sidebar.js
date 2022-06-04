import React from 'react'

const Sidebar = () => {
  return (
    <div className={` ${sidebar?'sidebar ':'no-show'}`}>
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
  )
}

export default Sidebar