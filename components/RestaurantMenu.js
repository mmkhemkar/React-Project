import React, { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {

  const { resId} = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

    const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card.card.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  


    const dispatch = useDispatch()

    const handleAddItems = (item) =>{
      dispatch(addItem(item))
    }

console.log("itemCards",itemCards)
  return (
    <div data-testid="foodItems"  className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id} style={{ marginBottom: "10px" }}>
            {item.card.info.name} - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100} 
            <button
              className="item-action-btn"
              onClick={()=>handleAddItems(item)}
            >
              Add +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
