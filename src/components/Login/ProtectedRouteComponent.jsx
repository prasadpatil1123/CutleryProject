import { Route, useNavigate } from "react-router-dom";
import Login from "./Login";

function ProtectedRouteComponent(props) {
  const navigate = useNavigate();
  // debugger;
  var isLoggedIn = false; //Code is yet to be written

  var isLoggedInFromSessionStorage = sessionStorage.getItem("isLoggedIn");
  if (isLoggedInFromSessionStorage != null) {
    if (isLoggedInFromSessionStorage == "True") {
      isLoggedIn = true;
    } 
  }

  if (isLoggedIn) {
    //check for sessionStorage values
    return <Route path={props.path} exact component={props.component} />;
  } else {
    <Route path="login" element={<Login />} />;
  }
}

export default ProtectedRouteComponent;
