const defaultState = {
  cityOfDeparture: null,
  cityOfArrival: null,
  date: null
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_city_of_departure":
      return { ...state, cityOfDeparture: action.payload };
    case "change_city_of_arrival":
      return { ...state, cityOfArrival: action.payload };
    case "change_date":
      return { ...state, date: action.payload };
    default:
      return state;
  }
};
