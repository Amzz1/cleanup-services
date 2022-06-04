import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";
import { Outlet } from "react-router-dom";

import React from 'react'

const Layout = () => {
  return (<>
    <Navbar/>
    <Outlet/>
    <Main/>
    <Footer/>
    </>
  )
}

export default Layout