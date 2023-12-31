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
import TrendingProduct from "./components/Trending/TrendingProduct.jsx";
import Steps from "./components/page/Steps/Steps.jsx";
import ProductInfo from "./components/productInfo/ProductInfo.jsx";
import ProductCard from "./components/productCard/ProductCard.jsx";
import Feedback from "./components/Feedback/feedback.jsx";
import AddBranchForm from "./components/AddBranchForm/AddBranchForm.jsx";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="steps" element={<Steps/>} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="addbranch" element={<AddBranchForm />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="productCard" element={<ProductCard />} />
        <Route path="productinfo/:id" element={<ProductInfo />} />
        <Route path="trending" element={<TrendingProduct />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
