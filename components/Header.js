import React, { useState,useContext } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Hedaer = () => {
  const [btnNameReact,setBtnNameReact] = useState("Login");
   
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  

  // subscribing to store using selector
  const cartItems = useSelector((store)=> store.cart.items);
  //console.log(cartItems)


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status : {onlineStatus ?  "✅" : "🔴" } </li>
            <li> <Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}> About Us</Link></li>
            <li><Link to={'/contact'}>Contact Us </Link></li>
            <li><Link to={'/glocery'}>Glocery</Link></li>
            <li style={{color:"black"}}><Link to={'/cart'}> Cart - ({cartItems.length} items)</Link></li>
            <button className="login-btn" onClick={()=>{
               btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
            }}>{btnNameReact}</button>
            <li>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Hedaer;