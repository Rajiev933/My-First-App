import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantsCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

 

  const { name, costForTwoMessage, totalRatingsString, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  return (
    <div className="menu text-center">
      <div className="restaurant-info">
        <h1 className=" font-bold my-6 text-2xl">{name}</h1>
        <div className="outlet">
          <p className="font-bold text-lg">
            ⭐{avgRating} {`(${totalRatingsString})`} • {costForTwoMessage}
          </p>
          <p className="font-bold text-lg">{cuisines.join(", ")}</p>
        </div>
      </div>
      {/* categories accordians */}
      <div className="menu-items">
        <ul>
          {categories.map((category,index) => (
            //controlled component
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
