export const mapRestaurantData = (data) => {
    return data.map(item => ({
       id: item.info.id,
      name: item.info.name,
       address: item.info.areaName,
       rating: item.info.avgRatingString,
       cuisine: item.info.cuisines,
       imageUrl: item.info.cloudinaryImageId,
       deliveryTime:item.info.sla.slaString,
       offerInfo:`${item.info.aggregatedDiscountInfoV3?.header || ''} ${item.info.aggregatedDiscountInfoV3?.subHeader || ''}`
    }));
  };