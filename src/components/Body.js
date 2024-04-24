import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mocData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=28.65420&lng=77.23730&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1>Looks like you are offline. Please check your internet..</h1>

  return listOfRestaurants.length === 0 ? <Shimmer /> : 
   (
    <div className="body ml-40">
      <div className="filter flex mt-10">
        <div className="search">
          <input
            type="text"
            className="border border-orange-600 border-solid p-1"
            placeholder="Restaurants Name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
          className=" ml-5 px-4 py-1 border bg-orange-400 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className=" ml-5 px-4 py-1 border bg-orange-400 rounded-lg"
          onClick={() => {
            // Filter Logic Here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Button
        </button>
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="card"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
