const initialState = {
    song: null,
  };
  
  export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case "setmusic":
        return {
          song: action.value,
        };
      case "logout":
        return {
          state: action.value,
        };
      default:
        return state;
    }
  };
  