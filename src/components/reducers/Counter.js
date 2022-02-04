const initialState = 0;
const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
      break;

    case "DECREMENT":
      return state - action.payload;

    default:
      return state;
  }
};

export default changeNumber;
