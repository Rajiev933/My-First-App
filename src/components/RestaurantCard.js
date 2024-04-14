import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
  return (
    <>
      <div className="container">
        <div className="restaurant-card">
          <div className="restaurant-img">
            <img src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
          </div>
          <div className="restaurant-details">
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

export default RestaurantCard;
