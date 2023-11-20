import { useState } from "react";
import { BackendBaseURL } from "../../BackendBaseURL";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [id, setId] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [userRole, setUserRole] = useState("");

  const save = async (event) => {
    event.preventDefault(); //to avoid default url pattern
    try {
      // const result = await axios.get("http://localhost:8080/rotarycutleryrental")

      await axios.post(`${BackendBaseURL}/register`, {
        //assign frontend user data to backend with backend variables
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        mobile_no: mobile,
        userRole: ("CUSTOMER", "ADMIN"),
      });
      alert("Registration Successfully Done!!"); //

      //set(change value) => if any value will change then it will be set through set() method
      setId("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setUserRole("");
    } catch (err) {
      console.log("Error: " + err);
      alert("Registration Failed");
      // toast.err("bad input");
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Registration Form
        </h2>
      </div>

      <form
        // action="#"
        // method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-10"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                name="firstname"
                id="first-name"
                placeholder="Enter your First Name"
                value={firstname}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>

            <div className="mt-2.5">
              <input
                type="text"
                name="Last Name"
                id="last-name"
                placeholder="Enter your Last Name"
                value={lastname}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>

            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Emailaddress"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>

            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password "
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="mobile-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mobile number
            </label>

            <div className="relative mt-2">
             
              <input
                type="tel"
                name="number"
                id="phone-number"
                placeholder="Enter Your Mobile Number"
                pattern="[0-9]]"
                title="Please enter a valid number"
                onChange={(event) => {
                  setMobile(event.target.value);
                }}
                className="block w-full rounded-md border-0 px-2.5 py-2 pl-25 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            User Role
          </label>
          <div style={{ margin: "10px" }}>
            <div className="dropdown">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked={userRole === "CUSTOMER"}
                  onChange={() => setUserRole("CUSTOMER")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  CUSTOMER
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked={userRole === "ADMIN"}
                  onChange={() => setUserRole("ADMIN")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  ADMIN
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            onClick={save}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign Up
          </button>

          <div className="text-center">
            <p>
              Already a member? <Link to="/login">Login</Link>
            </p>
          </div>
          <br />
        </div>
      </form>
    </div>
  );
};
export default Register;
