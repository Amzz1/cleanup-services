import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'
import Clean1 from '../image/clean1.webp'
import Clean2 from '../image/clean2.webp'
import Clean3 from '../image/clean3.webp'

const PanelResources = () => {
    const {location,isPanelResourcesOpen} = useGlobalContext()
    const container = useRef(null)

    useEffect(()=>{
        const {center,bottom}= location
        const panel = container.current
        panel.style.left = `${center}px`
        panel.style.top = `${bottom}px`
        console.log(center)
    },[location])
  return (
    <aside className={`${isPanelResourcesOpen?'show':"no-show"} show-resources` }  ref={container}>
      <h5>checklist</h5>
        <div>
          <h4>The Ultimate End of Lease Cleaning Checklist</h4>
          <p>
            For those on a budget and looking to perform their own end of lease cleans.
          </p>
        </div>
        <div>
          <h4>The Ultimate Moving House Checklist</h4>
          <p>
          From years of industry experience, a guide to help customers make the big move.          </p>
        </div>
        <div>
          <h4>The Ultimate Moving Overseas Checklist</h4>
          <p>
           A comprehensive moving plan for those venturing overseas.</p>
        </div>
    </aside>
  )
}

export default PanelResources