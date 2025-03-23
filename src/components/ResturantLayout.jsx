import axios from "axios";
import { useState, useEffect } from "react";
import { menuapi } from "../constants";
import { useParams } from "react-router-dom";
import { mapMenuItemsList } from "../utils/menuItems";
import Carousel from "./common/card/organisms/Carousel";
import DealCard from "./common/card/organisms/DealCard";
import MenuDealCard from "./common/card/organisms/MenuDealCard";
import FoodCard from "./common/card/organisms/FoodCard";
import LicenseCard from "./common/card/organisms/LicenseCard";
import HeaderComponent from "./Header";

const ResturantLayout = () =>  {
  const [restaurantName, setRestaurantName] = useState("...loading");
  const [dealsList, setDealsList] = useState([]);
  const [menuItemDetails, setMenuItemDetails] = useState([]);
  const [groupedCard, setGroupedCard] = useState([]);
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
        setRestaurantName(menuItemsList[0].name);
        setMenuItemDetails(menuItemsList[2].resturantDetails);
        setDealsList(menuItemsList[3].deals);
        setGroupedCard(menuItemsList[4].groupCard);
      }
    } catch (error) {
      console.error("Error fetching restaurant details:", error);
    }
  };
  return (
    <div>
      <HeaderComponent />
      <div className="resturantLayoutContainer">
        <div className="resturantLayout">
          <h1>{restaurantName}</h1>
          <MenuDealCard restaurant={menuItemDetails} />
          <div>
            <p>Deals for you</p>
            <Carousel
              items={dealsList}
              renderItem={(dealsList) => (
                <DealCard key={dealsList.info.restId} deal={dealsList} />
              )}
              chunkSize={3}
            />
          </div>
          {/* {
      toggle component, search bar } */}
          <div>
            <FoodCard
              groupCard={groupedCard.filter(
                (card) => card.type === "itemCategory"
              )}
            />
          </div>
          <div className="liscenseInfo">
            <LicenseCard
              licenseInfo={groupedCard.filter(
                (license) => license.type === "restaurantLicenseInfo"
              )}
              addressInfo={groupedCard.filter(
                (address) => address.type === "restaurantAddress"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResturantLayout;
