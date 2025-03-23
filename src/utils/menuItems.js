export const mapMenuItemsList = (data) => {
  return data.flatMap((card, index) => {
    switch (index) {
      case 0:
        return {
          name: card.card.card.text,
        };
      case 1:
        return {
          tabs: card.card.card.tabs,
        };
      case 2:
        return {
          resturantDetails: {
            rating: card.card.card.info?.avgRatingString,
            cost: card.card.card.info?.costForTwoMessage,
            cuisine: card.card.card.info.cuisines,
            areaName: card.card.card.info.areaName,
            totalRatingsString: card.card.card.info.totalRatingsString,
            deliveryTime: card.card.card.info.sla.slaString,
          },
        };
      case 3:
        return {
          deals: card.card.card.gridElements.infoWithStyle.offers,
        };
      case 4:
        return {
          groupCard: card.groupedCard?.cardGroupMap.REGULAR.cards.map((group) => {
            switch (group.card.card["@type"]) {
              case "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory":
                return {
                  type: 'itemCategory',
                  itemCards: group.card.card.itemCards || [],
                  title: group.card.card.title,
                };
              case "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory":
                return {
                  type: 'nestedItemCategory',
                  categories: group.card.card.categories || [],
                  title: group.card.card.title,
                };
              case "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel":
                return {
                  type: 'menuCarousel',
                  carousel: group.card.card.carousel || [],
                };
              case "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge":
                return {
                  type: 'menuVegFilterAndBadge',
                  badges: group.card.card.badges || {},
                  vegOnlyDetails: group.card.card.vegOnlyDetails || {},
                  topRatedFilter: group.card.card.topRatedFilter || {},
                  kidsCategoryFilter: group.card.card.kidsCategoryFilter || {},
                  vegFilter: group.card.card.vegFilter || {},
                  nonvegFilter: group.card.card.nonvegFilter || {},
                };
              case "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo":
                return {
                  type: 'restaurantLicenseInfo',
                  licenseType: group.card.card.type,
                  imageId: group.card.card.imageId,
                  text: group.card.card.text || [],
                };
              case "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress":
                return {
                  type: 'restaurantAddress',
                  name: group.card.card.name,
                  area: group.card.card.area,
                  completeAddress: group.card.card.completeAddress,
                };
              default:
                return null;
            }
          }) || []
        };
      default:
        // Handle unexpected cards (optional)
        return {};
    }
  });
};
