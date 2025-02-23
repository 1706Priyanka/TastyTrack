import Rating from "../atoms/Rating";
import Thumbnail from "../atoms/Thumbnail";
import { cdnurl } from "../../../../constants";

function ResturantCard({ restaurants }) {
  return (
    <div className="flex flex-wrap">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="w-1/5 h-170px m-[20px]">
          <Thumbnail src={cdnurl+restaurant.imageUrl} alt={restaurant.name} className='rounded-md h-[170px] w-full' />
          <h2 className="font-semibold text-lg p-1">{restaurant.name}</h2>
          <div className="flex">
            <Rating rating={restaurant.rating} className='rounded-md h-[20px]' />
            <span className="ml-[6px]">{restaurant.deliveryTime}</span>
          </div>
          <p className="font-gilroy font-extralight text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)] w-full overflow-hidden break-words line-clamp-1">
            {restaurant.cuisine}
          </p>
          {/* <p className="font-gilroy font-extralight text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)] w-full overflow-hidden break-words line-clamp-1">
            {restaurant.address}
          </p> */}
        </div>
      ))}
    </div>
  );
}

export default ResturantCard;