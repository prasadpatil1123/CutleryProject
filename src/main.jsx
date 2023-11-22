import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
// import Layout from "./Layout.jsx";
// import Home from "./components/Home/Home.jsx";
// import About from "./components/page/About/About.jsx";
// import Contact from "./components/Contact/Contact.jsx";
// import Login from "./components/Login/Login.jsx";
// import ErrorPage from "./components/page/404Page/ErrorPage.jsx";
// import Register from "./components/Register/Register";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
// import AdminPanel from "./components/User/role/admin/AdminPanel.jsx";
// import CustomerPanel from "./components/User/role/customer/CustomerPanel.jsx";
// import Products from "./components/Products/Products.jsx";
// import Cart from "./components/Cart/Cart.jsx";
// import ProtectedRouteComponent from "./components/Login/ProtectedRouteComponent.jsx";
// import UserList from "./components/User/UserList.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     // <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//       <Route path="forgotpassword" element={<ForgotPassword />} />

//       <Route path="/products" component={<Products/>} />

//       <ProtectedRouteComponent path="/admin" component={<AdminPanel/>} />
//       <ProtectedRouteComponent path="/customer" component={<CustomerPanel/>} />
//       <ProtectedRouteComponent path="/cart" component={<Cart/>} />
//       <ProtectedRouteComponent path = "/user" exact component={<UserList/>}/>
      
//       <Route path="*" element={<ErrorPage />} />
//     // </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
