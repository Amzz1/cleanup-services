import React from 'react'
import logo from '../image/logo.png'
import SideMenu from '../components/SideMenu'
import {RiArrowDownSLine} from 'react-icons/ri'
import {RiArrowUpSLine} from 'react-icons/ri'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
    const {setLocation,
        setIsPanelLocationOpen,
        isPanelLocationOpen,
        setIsPanelServicesOpen,
        isPanelServicesOpen,
        setIsPanelResourcesOpen,
        isPanelResourcesOpen,
        setSideMenu,sideMenu
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
    <>
   {sideMenu?<SideMenu/>:""} <nav className='nav'>
         <div className='nav-header'>
            <Link to='/' className="navbar-brand" href="#">
               <img src={logo} alt="" className="logo"/>
            </Link>
            <button onClick={()=>setSideMenu(item=>!item)} className='nav-toggle'><FaBars/></button>
          </div>
         
         <ul className="navbar ">
          
          
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
          <Link to='/blog' className="nav-item">
            <a className="nav-link" href="#">blog</a>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com.au/search?rlz=1C5CHFA_enAU763AU763&ei=dk3SXJjpC4ao_QbswquQAQ&q=this+is+neat+cleaning+sydney&oq=this+is+neat+cleaning+sydney&gs_l=psy-ab.3..33i21.13806.14467..14553...0.0..0.218.892.0j4j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.ySpCyBxpw1Q#lrd=0x6b12b9f8d4ae6a43:0x4d6a4d6ebad0981f,1,,,">reviews</a>
          </li>
         
          <Link to='/getaquote' className=" nav-item get-quote">
           <a className="nav-link " href="#">get a quote</a>
           </Link>
  
        </ul>
        
    </nav>
    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid d-flex  ">
        
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
          <Link to='/blog' className="nav-item">
            <a className="nav-link" href="#">blog</a>
          </Link>
          <li className="nav-item">
            <a className="nav-link" href="https://www.google.com.au/search?rlz=1C5CHFA_enAU763AU763&ei=dk3SXJjpC4ao_QbswquQAQ&q=this+is+neat+cleaning+sydney&oq=this+is+neat+cleaning+sydney&gs_l=psy-ab.3..33i21.13806.14467..14553...0.0..0.218.892.0j4j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.ySpCyBxpw1Q#lrd=0x6b12b9f8d4ae6a43:0x4d6a4d6ebad0981f,1,,,">reviews</a>
          </li>
         
          <Link to='/getaquote' className="nav-item get-quote">
           <a className="nav-link " href="#">get a quote</a>
           </Link>
         
          
        </ul>
      </div>
      
    </div>
  </nav> */}
  
  </>

  )
}

export default Navbar