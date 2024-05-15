import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant.js";
import { addItem } from "../utils/cartSlice.js";


const ItemList = ({ item }) => {
  console.log(item);

  const dispatch  = useDispatch();
  const handleAddItem = (item)=>{
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <div className=" font-bold">{item.card.info.name}</div>
              <div className="font-bold">
                {" "}
                ₹ -{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </div>
            </div>
            <p className=" text-xs text-gray-400 w-2/3 float-left">
              {item.card.info.description}
            </p>
          </div>
          <div className=" w-3/12 p-4">
            <div className=" absolute">
              <button className="rounded-lg p-2 bg-black text-white shadow-lg m-auto"
              onClick={()=>handleAddItem(item)}
              >Add +</button>
            </div>
            <img
              className=" w-full rounded-lg"
              src={CDN_URL + item.card.info.imageId}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
