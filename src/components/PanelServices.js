import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'
import Clean1 from '../image/clean1.webp'
import Clean2 from '../image/clean2.webp'
import Clean3 from '../image/clean3.webp'

const PanelResources = () => {
    const {location,isPanelServicesOpen} = useGlobalContext()
    const container = useRef(null)

    useEffect(()=>{
        const {center,bottom}= location
        const panel = container.current
        panel.style.left = `${center}px`
        panel.style.top = `${bottom}px`
        console.log(center)
    },[location])
  return (
    <aside className={`${isPanelServicesOpen?'show':"no-show"} show-services` }  ref={container}>
        <div className='location'>
          <div className='location1'>
            <img src={Clean1} alt='sth'/>
            <a>End of Lease Cleaning</a>
            <p>
    With our famous bond back guarantee*, our cleaners always ensure tenants recover their full rental deposits.
  </p>
          </div>
          <div className='location1'>
            <img src={Clean2} alt='sth'/>
            <a>Melbourne</a>
            <p>Melbourne might be known for it’s coffee culture, but our claim to fame is a hassle-free end of lease clean.</p>
          </div>
          <div className='location1'>
            <img src={Clean3} alt='sth'/>
            <a>Melbourne</a>
            <p>Melbourne might be known for it’s coffee culture, but our claim to fame is a hassle-free end of lease clean.</p>
          </div>
        </div>
    </aside>
  )
}

export default PanelResources