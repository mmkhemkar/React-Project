import React, { useContext, useEffect, useState } from "react";
// import resList from "../utils/mockData";
import ResturantCard, { withPromotedLable } from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLable(ResturantCard);

  const {loggedInUser,setUserName} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json")

    const res = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurant(res);
    setFilterRestaurant(res);
  };

  useEffect(() => {
    const filtered = listOfRestaurant.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filtered);
  }, [searchText]);

  const filteredData = () => {
    // const data = listOfRestaurant.filter((res) => res.info.avgRating >= 4.2);
    const data = listOfRestaurant.filter((res) => res.info?.avgRating == 4.6);
    setFilterRestaurant(data);
  };

  if(onlineStatus === false){
    return <h1>You are offline. Please check your internet connection and try again.</h1>
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-controls">
        <div className="search">
          <input
            type="text"
            placeholder="Type here"
            className="Search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <button className="filter-btn" onClick={filteredData}>
          Top Rated Restaurants
        </button>
        <label className="input-filed">UserName : </label>
        <input type="text" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} placeholder="dynamic-search"/>
      </div>
   
      <div className="res-container">
        {filterRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            { restaurant.info.avgRating === 4.3 ? <RestaurantCardPromoted  resName={restaurant}/> : <ResturantCard resName={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
