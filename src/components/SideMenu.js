import React from 'react'
import logo from '../image/logo.png'
import {RiArrowDownSLine} from 'react-icons/ri'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


const SideMenu = () => {
  const {setSideMenu} = useGlobalContext()
  return (
    <div className='side-menu'>
       <div className='side-menu-nav'>
            <Link to='/' onClick={()=>setSideMenu(item=>!item)} className="img-logo" href="#">
               <img src={logo} alt="" className="logo"/>
            </Link>
            <button onClick={()=>setSideMenu(item=>!item)} className='sidebar-nav-toggle'><FaTimes/></button>
          </div>
          <ul className="sidebar-list-item">
          <li className="sidebar-item"  >
            <a className="nav-link active " aria-current="page" href="#">Location</a>
               <RiArrowDownSLine/>
          </li>
          <li className="sidebar-item" >
            <a className="nav-link" href="#">Service</a>
             <RiArrowDownSLine/>

          </li>
          <li className="sidebar-item" >
            <a className="nav-link" href="#">resources</a>
             <RiArrowDownSLine/>

          </li>
          <Link to='/blog' onClick={()=>setSideMenu(item=>!item)} className="sidebar-item">
            <a className="nav-link" href="#">blog</a>
          </Link>
          <li className="sidebar-item">
            <a className="nav-link" href="https://www.google.com.au/search?rlz=1C5CHFA_enAU763AU763&ei=dk3SXJjpC4ao_QbswquQAQ&q=this+is+neat+cleaning+sydney&oq=this+is+neat+cleaning+sydney&gs_l=psy-ab.3..33i21.13806.14467..14553...0.0..0.218.892.0j4j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.ySpCyBxpw1Q#lrd=0x6b12b9f8d4ae6a43:0x4d6a4d6ebad0981f,1,,,">reviews</a>
          </li>
         
          <Link to='/getaquote' onClick={()=>setSideMenu(item=>!item)} className=" sidebar-item sidebar-get-quote">
           <a className="nav-link " href="#">get a quote</a>
           </Link>
  
        </ul>
    </div>
  )
}

export default SideMenu