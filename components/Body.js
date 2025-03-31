import React, { useEffect, useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
 
    setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilterRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  const filteredData = () => {
    const data = resList.filter((res) => res.info.avgRating > 4);
    setListOfRestaurant(data);
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Type here"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={()=>{
            const filtereData = listOfRestaurant.filter((res)=>(
              res.info?.name?.toLowerCase().includes(searchText.toLocaleLowerCase())
            ))
            setFilterRestaurant(filtereData);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={filteredData}
          // onClick
          // ={() => {
          //   const filteredData = resList.filter(
          //     (res) => res.info.avgRating > 4.1
          //   );
          //   setListOfRestaurant(filteredData);
          // }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRestaurant?.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resName={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
