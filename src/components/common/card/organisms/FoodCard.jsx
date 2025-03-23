// import vegLogo from "./../public/veg-logo.png";
// import tastyTrack from "./../public/tastytrack.png";
import { cdnurl } from "../../../../constants";
import Accordian from "./Accordian";

const FoodCard = ({ groupCard }) => {
  return (
    <>
      {groupCard.map((card, cardIndex) => (
        <Accordian key={cardIndex} index={cardIndex} title={card?.title}>
          {card.itemCards.map((item, itemIndex) => (
            <div className="flex justify-between" key={itemIndex}>
              <div >
                <img
                  src='./../public/veg-logo.png'
                  alt="veg-logo"
                  className="h-[20px] w-[20px] rounded-[2px]"
                />
                <p>{item.card.info?.name || ''}</p>
                <p>{item.card.info?.defaultPrice/100 || item.card.info.price/100}</p>
                <p>{item.card.info?.ratings.aggregatedRating.rating}</p>
                <p>{item.card.info?.description}</p>
              </div>
              <div>
                <img
                  className="h-36 w-39 aspect-auto rounded-lg"
                  src={cdnurl + item.card.info?.imageId || ''}
                  alt="food"
                />
                <button className="add-btn">ADD</button>
              </div>
              <div className="line"></div>
            </div>
          ))}
        </Accordian>
      ))}
    </>
  );
};

export default FoodCard;