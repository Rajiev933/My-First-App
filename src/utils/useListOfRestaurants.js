import { MAIN_API } from "./constant";
import { useState, useEffect } from "react";


const useListOfRestaurants = ()=>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MAIN_API);

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };

  console.log(listOfRestaurants)
  return listOfRestaurants;

}

export default useListOfRestaurants;