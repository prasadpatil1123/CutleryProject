import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function Layout() {
  return (
    <>
    <ToastContainer />
    {/* <Header/>   
    <Outlet />
    <Footer /> */}
    </>
  )
}

export default Layout