export const mapRestaurantData = (data) => {
    console.log(data)
    return data.map(item => ({
       id: item.info.id,
      name: item.info.name,
    //   address: item.address,
       rating: item.info.avgRatingString,
       cuisine: item.info.cuisines,
       imageUrl: item.info.cloudinaryImageId,
    }));
  };