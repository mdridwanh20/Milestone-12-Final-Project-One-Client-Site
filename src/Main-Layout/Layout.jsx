import React from 'react'
import Navbar from '../Component/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Common/Footer'

export default function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
