const initialState = {
    playlist: null,
  };
  
  export const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case "setplaylist":
        return {
          playlist: action.value,
        };
      case "null":
        return {
          playlist: null,
        };
      default:
        return state;
    }
  };