// Import necessary dependencies

import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// Create the Login component
const Login = () => {
  // State to hold user credentials
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const usenavigate = useNavigate();

 useEffect(() => {
  sessionStorage.clear();
 },[]);

 const ProceedLogin =(e) =>{
  e.preventDefault();
  if(validate()){
    fetch("http://localhost:8000/user/"+username)
    .then((res)=>{
      return res.json();
    })
    .then((resp)=>{
      if(Object.keys(resp).length===0){
        toast.error('Please Enter valid username');
      }else{
        if(resp.password == password){
            toast.success('Success');
            sessionStorage.setItem('username',username);
            sessionStorage.setItem('userrole',resp.role);
            usenavigate('/')
        }else{
          toast.error('Please Enter valid credentials');
        }
      }
    }).catch((err)=> {
      toast.error('Login Failed due to :'+err.message);
    });
  }
 }

 const ProceedLoginusingAPI = (e) => {
  e.preventDefault();
  if(validate()) {
    let inputobj = {"username":username,"password":password};
    fetch("")
  }
 }

 const validate = () => {
  let result = true;
  if(username === '' || username === null){
    result = false;
    toast.warning('Please Enter Username');
  }
  if(password === '' || password === null){
    result = false;
    toast.warning('Please Enter Password');
  }
  return result;
 }

  return (
    <div class="flex flex-col items-center justify-center mt-10">
  <h2 class="text-3xl font-semibold mb-10">Login</h2>
  <form onSubmit={ProceedLogin} class="w-full max-w-sm">
    <label class="block text-gray-700 font-medium mb-2">User Name: <span className='errmsg'>*</span></label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <label class="block text-gray-700 font-medium mb-2">Password: <span className='errmsg'>*</span></label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button type="submit" 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mb-10">Login</button>
    {" "}
    <Link className="btn btn-success" to={'/register'}>Register</Link>
    {" "}
    <Link className="btn btn-danger" to={'/forgotpassword'}>Forgot Password</Link>
  </form>

</div>
  );
};

export default Login;
