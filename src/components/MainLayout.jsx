import Carousel from "./common/card/organisms/Carousel";
import ResturantCard from "./common/card/organisms/ResturantCard";
import HeaderComponent from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { mapRestaurantData } from "../utils/resturant";
import { mapFoodData } from "../utils/food";
import Thumbnail from "./common/card/atoms/Thumbnail";
import { cdnurl, resturantapi } from "../constants";
import { useNavigate } from "react-router-dom";
import DealCard from "./common/card/organisms/DealCard";

function MainLayout() {
  const navigate = useNavigate();
  const [foodList, setFoodList] = useState([]);
  const [TopResturantList, setTopResturantList] = useState([]);
  const [listOfResturants, setListOfResturants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(resturantapi);
      let foodListItems =
        response.data.data.cards[0].card.card.gridElements.infoWithStyle.info;
      let TopResturantListItems =
        response.data.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;
      let resturants =
        response.data.data.cards[4].card.card.gridElements.infoWithStyle
          .restaurants;

      if (foodListItems) {
        const mappedData = mapFoodData(foodListItems);
        setFoodList(mappedData);
      }

      if (TopResturantListItems) {
        const mappedData = mapRestaurantData(TopResturantListItems);
        setTopResturantList(mappedData);
      }
      if (resturants) {
        const mappedData = mapRestaurantData(resturants);
        setListOfResturants(mappedData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <HeaderComponent />
      <div className="main-container">
        <div className="mt-[2%] mb-[2%] mx-[6%]">
          <div> Priyanka, what's on your Mind</div>
          <Carousel
            items={foodList}
            renderItem={(food) => (
              <Thumbnail
                src={cdnurl + food.imageUrl}
                alt={food.name}
                className="w-[150px] h-[150px] rounded-md"
              />
            )}
            chunkSize={6}
          />
          <div>Top Resturant Chain in Hyderabad</div>
          <Carousel
            items={TopResturantList}
            renderItem={(restaurant) => (
              <ResturantCard
                restaurants={[restaurant]}
                cardWidth="min-w-[80%]"
                onClickCard={() => navigate(`/resturant/${restaurant.id}`)}
              />
            )}
            chunkSize={4}
          />
          <div>Resturants with online food delivery in Hyderabad</div>
          <div className="flex flex-wrap justify-center">
            {listOfResturants.map((restaurant) => (
              <ResturantCard
                key={restaurant.id}
                restaurants={[restaurant]} // Passing an array with a single restaurant
                cardWidth="w-[80%]"
                onClickCard={() => navigate(`/resturant/${restaurant.id}`)}
              />
            ))}
          </div>

          {/* <div className="flex">
            <DealCard />
            <DealCard />
            <DealCard />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
