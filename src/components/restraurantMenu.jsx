import React, { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrautantMenu";

const RestraurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  if (resInfo === null) return;
  <Shimmer />;
  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}-
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      <h2>{resInfo?.cards[2]?.card?.card?.info?.avgRating}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res?.card?.info?.id}>
            {res?.card?.info?.name} - Rs. {res?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestraurantMenu;
