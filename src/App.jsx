import { Route, Routes } from "react-router-dom";
// import ProtectedRouteComponent from "./components/Login/ProtectedRouteComponent.jsx";

import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/page/About/About.jsx";
import ContactUs from "./components/Contact/Contact.jsx";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ErrorPage from "./components/page/404Page/ErrorPage.jsx";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/boxicons/css/boxicons.min.css";
// import Navbar from "./components/Navbar/";

// import AdminPanel from "./components/User/role/admin/AdminPanel.jsx";
import TrendingProduct from "./components/Trending/TrendingProduct.jsx";
import Steps from "./components/page/Steps/Steps.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="home" exact element={<Home />} />
        {/* <Route path="" element={<Home />} /> */}
        <Route path="about" element={<AboutUs />} />
        <Route path="steps" element={<Steps/>} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="Trending" element={<TrendingProduct />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
        {/* </Route> */}
        {/* <ProtectedRouteComponent path="/admin" element={<AdminPanel />} /> */}
        {/* <ProtectedRouteComponent
            path="/customer"
            element={<CustomerPanel />}
          /> */}
        {/* <ProtectedRouteComponent path="/cart" element={<Cart />} /> */}
        {/* <ProtectedRouteComponent
            path="/user"
            exact
            element={<UserList />}
          /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
