const initialState = {
  play: false,
};

export const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case "play":
      return {
        play: true,
      };
    case "pause":
      return {
        play: false,
      };
    default:
      return state;
  }
};
