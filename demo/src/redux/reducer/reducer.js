const initialState = {
  startType: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...state, startType: action.payload };

    default:
      return state;
  }
};

export default reducer;
