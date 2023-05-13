import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                search bar
            </div>
            <div className="res-container">
                {resList.map((resCard) => <RestaurantCard key={resCard.data.id} resData={resCard} />)}
                
            </div>
        </div>
    )
}

export default Body;