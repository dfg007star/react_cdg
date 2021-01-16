const initialState = {
  worklogs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "WORKLOGS_LOADED":
      return {
        worklogs: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
