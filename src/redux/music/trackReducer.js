const initialState = {
    track: null,
  };
  
  export const trackReducer = (state = initialState, action) => {
    switch (action.type) {
      case "settrack":
        return {
            track: action.value,
        };
      case "logout":
        return {
          state: action.value,
        };
      default:
        return state;
    }
  };
  