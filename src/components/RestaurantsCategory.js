import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  
  return (
    <div className=" w-3/4 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className=" flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion Body */}
      {showItems && <ItemList item={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
