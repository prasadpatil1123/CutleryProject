import React, { useState } from 'react';
import {
    MDBInput,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { BackendBaseURL } from '../../BackendBaseURL';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const hostname ="http://localhost:8080/rotarycutleryrental";


const Login = () => {

    // var [userName, setuserName] = useState("");
    var [user, setUser] = useState({ email: "", password: "" });
    var [message, setMessage] = useState("");
    const navigate = useNavigate();
    // const history = useHistory();
    // function redirectToAnotherWebsite() {
    //     window.location.href = 'https://www.google.com/';
    // }
    var handleChange = (args) => {
        var changedUser = { ...user };
        changedUser[args.target.name] = args.target.value;
        setUser(changedUser);
    }

    // var Register = () => {
    //     navigate.push("/register");
    // }
    // var Register=()=>{
    //     history.push("/register")
    // }

        // const notify = () => toast("Wow so easy!");

    var signIn = async () => {
        console.log("Inside Login")
        // await axios.get(`${BackendBaseURL}/login`,{
            await axios.get(`${hostname}/login`,{
            params: {
              email: user.email,
              password: user.password
            }
          }).then((res) => {

            // debugger; //to debug the code here

            console.log(res.data);
            if (res.data.userRole === "CUSTOMER") {

                setMessage("");
                sessionStorage.setItem("isLoggedIn", "True");

                console.log(res.data)

                sessionStorage.setItem("userName", res.data.first_name);
                console.log(res.data.first_name);
                sessionStorage.setItem("userId", res.data.id);
                console.log(res.data.id);


                sessionStorage.setItem("userRole", res.data.userRole);
                console.log(res.data.userRole);

                const objectString = JSON.stringify(res.data);

                sessionStorage.setItem("user", objectString);

                console.log(res.data.userRole);

                setMessage("Login Succesfull!");
                // toast.success('Login Successful!');
                navigate("/customer");
                 alert("Login Successfull!!");


            }
            else if (res.data.userRole === "ADMIN") {

                setMessage("")

                sessionStorage.setItem("isLoggedIn", "True");
                console.log(res.data)

                sessionStorage.setItem("userName", res.data.first_name);
                console.log(res.data.first_name)

                sessionStorage.setItem("userId", res.data.id);
                console.log(res.data.id)

                sessionStorage.setItem("userRole", res.data.userRole);
                console.log(res.data.userRole)

                const objectString = JSON.stringify(res.data);

                sessionStorage.setItem("user", objectString);

                console.log(res.data.userRole);

                setMessage("Login successfull!");
                navigate("/adminhome");
                // toast.success("Login Successful!");
                 alert("Login Successfull!!");
                
            } else {
                alert("Login failed, Plz enter valid Credentials.");
                setUser({ email: "", password: "" });
                setMessage("Something went wrong");
            }
            //toast.success("Login Successful!");

        }).catch((e)=>{
            console.log(e);
            toast.error('Bad Credentials!');
        })
 

    }


    // var Logout = () => {
    //     sessionStorage.removeItem("isLoggedIn");
    //     sessionStorage.removeItem("userName");
    //     sessionStorage.removeItem("userId");
    //     sessionStorage.removeItem("userRole");
    //     navigate.push("/");
    // }



    return (
        <div className="container shadow bordered" style={{ marginBottom: "35px", marginTop: "35px", width: "500px", borderRadius: "10px" }}>
            {/* <ToastContainer /> */}
            <br />
            <h2 style={{ "margin": "10px", textAlign: 'center' }}>Login</h2>
            {/* <ToastContainer /> */}
            {/* <br /> */}
            <form>
                <MDBRow className='mb-4'>

                </MDBRow>
                <MDBInput className='mb-4' type='email' id='form3Example3' name='email' placeholder='Email Address' value={user.email}
                    onChange={handleChange}
                />

                <MDBInput className='mb-4' type='password' id='form3Example4' name='password' placeholder='Password' value={user.password}
                    onChange={handleChange}
                />
            </form>

                <button type='submit' className="white-text" style={{ width: "470px", height: "37.8px", border: 'none', borderRadius: "5px", backgroundColor: '#0275D8' }} onClick={signIn}>SignIn</button>
                
                <ToastContainer />

                {/* <button type='submit' className="white-text" style={{ width: "470px", height: "37.8px", border: 'none', borderRadius: "5px", backgroundColor: '#0275D8' }} onClick={() => { signIn(); notify(); }}>SignIn</button> */}
              
                <div className='text-center'>
                   <p>
                        Forgot password ? <Link to='/forgotpassword'>Click here! </Link>
                    </p>
                    <p>
                        Not a member? <Link to='/register'>Register</Link>
                    </p>
                    <p>or sign up with:</p>,

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='google' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn floating color="secondary" className='mx-1'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>

                </div>
                <br />
                
            <div>
                {message}
            </div>
            <br />
        </div>
    );
}

export default Login