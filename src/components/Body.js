import RestaurantCard from "./RestaurantCard";
import { resList} from "../utils/mocData"

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn">Top Rated Button</button>
      </div>
      <div className="restaurant-cards">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;