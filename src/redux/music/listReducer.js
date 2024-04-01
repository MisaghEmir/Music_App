const initialState = {
  list: null,
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setlist":
      return {
        list: action.value,
      };
    case "null":
      return {
        list: null,
      };
    default:
      return state;
  }
};
