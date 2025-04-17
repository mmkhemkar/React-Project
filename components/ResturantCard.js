import React, { useContext } from "react";
import { CDN_URL } from "../utils/contants";
import UserContext from "../utils/UserContext";

const ResturantCard = ({ resName }) => {
  console.log("resName",resName)
    const { name, cuisines, avgRating, costForTwo } = resName.info;

    const {loggedInUser} = useContext(UserContext);
    return (
      <div data-testid="resCard" className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL +
            resName.info?.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{resName.info?.sla.deliveryTime} Minutes</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    );
  };

// Higher order component
  export const withPromotedLable = (ResturantCard) =>{
    return (props)=>{
      return(
        <div>
          <label style={{color:'red'}}>Promoted</label>
          <ResturantCard {...props}/>
        </div>
      )
    }
  }


  export default ResturantCard;