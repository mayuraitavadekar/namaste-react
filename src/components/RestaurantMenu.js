
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    
    const { id } = useParams();
    

    return (
        <div>
            <p>id: {id}</p>
            <p>this is page of restaurant details</p>
        </div>
    )
};

export default RestaurantMenu;