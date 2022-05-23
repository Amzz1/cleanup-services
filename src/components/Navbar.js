import React from 'react'
import logo from '../image/logo.png'
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import { useGlobalContext } from '../context'
const Navbar = () => {
    const {setLocation,
        setIsPanelLocationOpen,
        isPanelLocationOpen,
        setIsPanelServicesOpen,
        isPanelServicesOpen,
        setIsPanelResourcesOpen,
        isPanelResourcesOpen
      } = useGlobalContext()
    const displayPanel = (e)=>{
        const panel= e.target.getBoundingClientRect()
       const center = (panel.left+ panel.right)/2
       const bottom = panel.bottom +3
       setLocation({center,bottom})
    }
    const displayLocationPanel = (e) =>{
       displayPanel(e)
       setIsPanelLocationOpen(true)
    }
    const displayServicesPanel = (e) =>{
       displayPanel(e)
       setIsPanelServicesOpen(true)
 
    }
    const displayResoursePanel = (e) =>{
       displayPanel(e)
       setIsPanelResourcesOpen(true)
      
    }
    const undisplay = (e) =>{
      setIsPanelLocationOpen(false)
      setIsPanelServicesOpen(false)
      setIsPanelResourcesOpen(false)
    }
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid d-flex  ">
        <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="logo"/>
          </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav align-list ">
          <li className="nav-item" onMouseOver={displayLocationPanel} onMouseOut={undisplay} >
            <a className="nav-link active " aria-current="page" href="#">Location</a>
              {isPanelLocationOpen?<RiArrowUpSLine/>: <RiArrowDownSLine/>}
          </li>
          <li className="nav-item" onMouseOver={displayServicesPanel} onMouseOut={undisplay} >
            <a className="nav-link" href="#">Service</a>
            {isPanelServicesOpen?<RiArrowUpSLine/>: <RiArrowDownSLine/>}

          </li>
          <li className="nav-item" onMouseOver={displayResoursePanel} onMouseOut={undisplay}>
            <a className="nav-link" href="#">resources</a>
            {isPanelResourcesOpen? <RiArrowUpSLine/>: <RiArrowDownSLine/>}

          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">reviews</a>
          </li>
          <li className="nav-item get-quote">
            <a className="nav-link " href="#">get a quote</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>

  )
}

export default Navbar