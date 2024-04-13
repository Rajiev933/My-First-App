import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, totalRatingsString, avgRating, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="menu">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <div className="outlet">
          <h3>
            ⭐{avgRating} {`(${totalRatingsString})`} • {costForTwoMessage}
          </h3>
          <h3>{cuisines.join(", ")}</h3>
          <h3></h3>
        </div>
        {/* Add other restaurant details here */}
      </div>
      <div className="menu-items">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((menuItem) => (
            <li key={menuItem.card.info.id}>
              <div className="menu-item">
                <div className="item-name">{menuItem.card.info.name}</div>
                <div className="item-name">
                  {menuItem.card.info.description}
                </div>
                <div className="item-price">
                  ₹ {menuItem.card.info.defaultPrice / 100}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
