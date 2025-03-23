import Rating from "../atoms/Rating";

const MenuDealCard = (restaurant) => {
  return (
    <>
      <div className="flex">
        <Rating
          rating={restaurant.restaurant.rating}
          className="rounded-md h-[20px]"
        />
        <span className="ml-[6px]">{restaurant.restaurant.totalRatingsString}</span>
        <span className="ml-[6px]">{restaurant.restaurant.cost}</span>
      </div>
      <div>
      <p>{restaurant.restaurant.cuisine?.length ? restaurant.restaurant.cuisine.join(", ") : "No cuisine available"}</p>


      </div>
      <div className="flex">
        <p>Outlet</p> <span className="ml-[10px]"> {restaurant.restaurant.areaName}</span>
      </div>
    <p>{restaurant.restaurant.deliveryTime}</p>
    <div>
        <p>Free delivery on Order above 119</p>
    </div>
    </>
  );
};

export default MenuDealCard;
