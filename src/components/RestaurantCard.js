import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <>
      <div className="flex w-[200px] min-h-[330px] border hover:shadow-xl">
        <div className="w-full">
          <img className="h-[200px] w-full" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />

          <div className=" p-2">
            <h2>{name}</h2>

            <h2>
              ⭐{avgRating} • {sla.deliveryTime} mins
            </h2>

            <p>{cuisines.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};


// Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) =>{
    return(
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
