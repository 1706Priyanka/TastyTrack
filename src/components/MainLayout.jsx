import Carousel from './common/card/organisms/Carousel';
import ResturantCard from './common/card/organisms/ResturantCard';
import  HeaderComponent from './Header';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { mapRestaurantData } from '../utils/resturant';

function MainLayout() {
  const [listOfResturants, setListOfResturants] = useState([]);
    useEffect(()=>{
        fetchData();
      },[])

      const fetchData = async () => {
        try {
            const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5", {
                params: {
                    lat: 17.37240,
                    lng: 78.43780,
                    "is-seo-homepage-enabled": true,
                    "page_type": "DESKTOP_WEB_LISTING"
                }
            });
            console.log(response.data);
            let resturants = response.data
            const mappedData = mapRestaurantData(resturants.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setListOfResturants(mappedData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
  return (
    <div>
      <HeaderComponent />
      <Carousel/>
      <ResturantCard restaurants={listOfResturants} />
    </div>
  );
}

export default MainLayout;

