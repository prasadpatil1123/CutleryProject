import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/boxicons/css/boxicons.min.css';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout