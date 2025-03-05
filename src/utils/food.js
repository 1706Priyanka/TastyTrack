export const mapFoodData = (data) => {
    return data.map(item => ({
       id: item.id,
      name: item.action.text,
       imageUrl: item.imageId
    }));
  };