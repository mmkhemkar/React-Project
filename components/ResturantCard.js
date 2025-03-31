import React from "react";
import { CDN_URL } from "../utils/contants";

const ResturantCard = ({ resName }) => {
    const { name, cuisines, avgRating, costForTwo } = resName.info;
    return (
      <div className="res-card">
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
      </div>
    );
  };


  export default ResturantCard;