import Rating from "../atoms/Rating";
import Thumbnail from "../atoms/Thumbnail";
import { cdnurl } from "../../../../constants";
import { menuapi } from "../../../../constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ResturantCard({ restaurants, cardWidth = "w-1/5",onClickCard  }) {
  return (
    <div className="flex flex-wrap justify-center">
      {restaurants.map((restaurant) => (
        <div onClick={onClickCard} key={restaurant.id} className={`${cardWidth} h-170px m-[20px]`}>
          <Thumbnail src={cdnurl+restaurant.imageUrl} alt={restaurant.name} className='rounded-md h-[170px] w-full' />
          <div className="relative bottom-[30px] offer-info-text">{restaurant.offerInfo}</div>
          <h2 className="resturant-name">{restaurant.name}</h2>
          <div className="flex">
            <Rating rating={restaurant.rating} className='rounded-md h-[20px]' />
            <span className="ml-[6px]">{restaurant.deliveryTime}</span>
          </div>
          <p className="font-gilroy font-extralight text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)] w-full overflow-hidden break-words line-clamp-1">
            {restaurant.cuisine.join(', ')}
          </p>
          <p className="font-gilroy font-extralight text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)] w-full overflow-hidden break-words line-clamp-1">
            {restaurant.address}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ResturantCard;