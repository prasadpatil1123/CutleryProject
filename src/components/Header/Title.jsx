import React from 'react';
import 
{ 
  Link,
  NavLink 
  }
    from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../../assets/Logo.png';


export default function Title() {
   const commonLinkStyles = "py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0";
   const activeLinkStyles = "text-green-700";
  const buttonStyles = "font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none";
  const loginStyles = "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300";
  // const loginStyles = "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300";
  const SearchbaarStyles = "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300";
  // const registerStyles = "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300";

  const navigationLinks = [
    { to: "/", text: "Home" },
    { to: "/About", text: "About" },
    { to: "/Contact", text: "Contact" },
    { to: "/Service", text: "Service" },
    { to: "/Book_Cutlery", text: "Book Cutlery" },
    { to: "/User", text: "User" },
  ];

  return (
    
      <nav className="bg-transparent border-gray-200 px-4 lg:px-6 py-2.5 flex-wrap justify-between items-center">
        <div className="flex flex-wrap justify-between items-start mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-5 h-16" alt="Logo" />
          </Link>

          <div className="flex items-end lg:order-2">
            <Link to="/Login" className={`${buttonStyles} ${loginStyles}`}>
              Log in
            </Link>
            {/* <Link to="/Register" className={`${buttonStyles} ${registerStyles}`}>
              Registration
            </Link> */}
            <Link to="/SearchBar" className={`${buttonStyles} ${SearchbaarStyles}`}>
              <SearchBar />
            </Link>
          </div>        

        </div>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto " >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={`${commonLinkStyles} ${link.to === "" ? activeLinkStyles : "text-gray-700"}`}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
      </nav>
   
  );
}
