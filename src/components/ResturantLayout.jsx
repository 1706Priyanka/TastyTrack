import Rating from "./common/card/atoms/Rating";
import axios from "axios";
import { useState, useEffect } from "react";
import { menuapi } from "../constants";
import { useParams } from "react-router-dom";
import { mapMenuItemsList } from "../utils/menuItems";
import Carousel from "./common/card/organisms/Carousel";
import DealCard from "./common/card/organisms/DealCard";
import MenuDealCard from "./common/card/organisms/MenuDealCard";

const ResturantLayout = () => {
  const [restaurantName, setRestaurantName] = useState("...loading");
  const [dealsList, setDealsList] = useState([]);
  const [menuItemDetails, setMenuItemDetails] = useState([]);
  const params = useParams();
  const resturantId = params.id;

  useEffect(() => {
    handleCardClick(resturantId);
  }, [resturantId]);
  const handleCardClick = async (restaurantId) => {
    try {
      const response = await axios.get(`${menuapi}${restaurantId}`);
      if (response) {
        const menuItemsList = mapMenuItemsList(response.data.data.cards);
        console.log(menuItemsList)
        setRestaurantName(menuItemsList[0].name);
        setMenuItemDetails(menuItemsList[2].resturantDetails);
        setDealsList(menuItemsList[3].deals);
      }
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };

  return (
    <div>
      <h1>{restaurantName}</h1>
      <MenuDealCard restaurant={menuItemDetails} />
      <div>
        <p>Deals for you</p>
        <Carousel
          items={dealsList} // Ensure you're passing the correct array
          renderItem={(dealsList) => (
            <DealCard key={dealsList.info.restId} deal={dealsList} />
          )}
          chunkSize={3}
        />
        x
      </div>
      <div>
        <p> menu</p>
        {/* search component */}
        <p>toggle component</p>
        <p>top picks</p>
        {/* Carousel component */}
        {/* List component */}
      </div>
    </div>
  );
};

export default ResturantLayout;
