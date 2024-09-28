const initialState = {
    show: true,
  };
  
  export const showPlayer = (state = initialState, action) => {
    switch (action.type) {
      case "show":
        return {
          show: true,
        };
      case "hidden":
        return {
          show: false,
        };
      default:
        return state;
    }
  };