import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";

export default function Header(selectCat) {
  const [category, setCategory] = useState([]);
  // const history = useHistory();
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    const getCategory = async () => {
      const reqData = await fetch(
        "http://localhost:8080/pizzadelivery/categories"
      );
      const resData = await reqData.json();
      setCategory(resData);
      console.log(reqData);
    };
    getCategory();
  }, []);

  // var OrdersPage = () => {
  //   history.push("/orderbyuser");
  // };

  // var ReviewsPage = () => {
  //   history.push(`/userreviews/${userId}`);
  // };

  // var Logout = () => {
  //   sessionStorage.removeItem("isLoggedIn");
  //   sessionStorage.removeItem("userName");
  //   sessionStorage.removeItem("userId");
  //   sessionStorage.removeItem("userRole");
  //   history.push("/login");
  // };

  // var profilePage = () => {
  //   if (userId != null) {
  //     history.push(`/profile/${userId}`);
  //   } else {
  //     alert("Please login to check profile");
  //     history.push("/login");
  //   }
  // };

  // var Login = () => {
  //   history.push("/login");
  // };

  // var Register = () => {
  //   history.push("/register");
  // };

  // const handleOptionChange = (event) => {
  //   // debugger;
  //   const selectedCategory = category.find((cat) => cat === event.target.value);
  //   console.log("selected cat id");
  //   console.log(selectedCategory.id);
  // };

  // const updateCat = (id) => {
  //   console.log("selected cat id");
  //   console.log(id);
  //   selectCat(id);
  // };
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-5 h-12" alt="Logo" />
          </Link>

          {/* <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
          </div> */}

          <div className="flex items-center lg:order-4 ">
            <Dropdown>
              <DropdownToggle
                tag="b"
                // className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                style={{ backgroundColor: "bg-green-700", color: "white" }}
              >
                {/* Profile */}
                <span className="white-text">Profile</span>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>My Orders </DropdownItem>
                <DropdownItem>My Reviews</DropdownItem>
                <DropdownItem>
                  <Link
                    to="/login"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Login
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <div className="flex items-center lg:order-3 ">
            <div className="dropdown" style={{ marginLeft: "10px" }}>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select A Category
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a
                    key={0}
                    value={0}
                    // onClick={() => {
                    //   updateCat(0);
                    // }}
                    className="dropdown-item"
                    href="#"
                  >
                    All
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                to="/Home"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-green-700" : "text-gray-700"
                  } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* <li>
                <select>
                  <option>Home</option>
                  <option>About</option>
                  <option>Contact</option>
                  <option>Service</option>
                </select>
              </li> */}
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                   ${
                     isActive ? "text-green-700" : "text-gray-700"
                   } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                   ${
                     isActive ? "text-green-700" : "text-gray-700"
                   } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/steps"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                   ${
                     isActive ? "text-green-700" : "text-gray-700"
                   } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  Steps to follow 
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Book_Cutlery"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                   ${
                     isActive ? "text-green-700" : "text-gray-700"
                   } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  Book Cutlery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Trending"
                  className={({ isActive }) =>
                    `block pu-2 pr-4 pl-3 duration-200 border-b border-gray-100
                   ${
                     isActive ? "text-green-700" : "text-gray-700"
                   } lg:hover:bg-transparent lg:border-0 hover:text:text-green-700 lg:p-0`
                  }
                >
                  Trending
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
