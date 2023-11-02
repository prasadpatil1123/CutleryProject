import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/Login.jsx'
import ErrorPage from './components/404Page/ErrorPage'
import Register from './components/Register/Register'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>     
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='forgotpassword' element={<ForgotPassword />} />
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
