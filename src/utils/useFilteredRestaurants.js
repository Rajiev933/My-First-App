import { MAIN_API } from "./constant";
import { useState, useEffect } from "react";


const useFilteredRestaurants = ()=>{
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_API);

    const json = await data.json();
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };

  console.log(filteredRestaurants)
  return filteredRestaurants;

}

export default useFilteredRestaurants;