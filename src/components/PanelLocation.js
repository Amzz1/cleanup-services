import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'
import Sydney from '../image/sydney.webp'
import Melbourne from '../image/melbourne.webp'

const PanelLocation = () => {
    const {location,isPanelLocationOpen,setIsPanelLocationOpen} = useGlobalContext()
    const container = useRef(null)

    useEffect(()=>{
        const {center,bottom}= location
        const panel = container.current
        panel.style.left = `${center}px`
        panel.style.top = `${bottom}px`
        console.log(center)
    },[location])
  return (
    <aside className={`${isPanelLocationOpen?'show':"no-show"} show-location` } onMouseOver={setIsPanelLocationOpen(true)}  ref={container}>
        <div className='location'>
          <div className='location1'>
            <img src={Sydney} alt='sth'/>
            <a>Sydney</a>
            <p>From hidden terraces to apartment high-rises, we offer Sydney's best end of lease cleaning service.</p>
          </div>
          <div className='location1'>
            <img src={Melbourne} alt='sth'/>
            <a>Melbourne</a>
            <p>Melbourne might be known for it’s coffee culture, but our claim to fame is a hassle-free end of lease clean.</p>
          </div>
        </div>
    </aside>
  )
}

export default PanelLocation