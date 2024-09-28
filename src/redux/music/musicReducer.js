const initialState = {
    song: null,
    status: 0,
    time: 0,
  };
  
  export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
      case "setmusic":
        return {
          ...state,
          song: action.value,
        };
      case "setstatus":
        return {
          ...state,
          status: action.value,
        };
      case "settime":
        return {
          ...state,
          time: action.value,
        };
      case "null":
        return {
          song: null,
          song: null,
        };
      default:
        return state;
    }
  };
  