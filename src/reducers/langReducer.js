const initialState = "EN";

export default (state = initialState, action) => {
  switch (action.type) {
    case "LAN_SELECT":
      return action.payload;
    default:
      return state;
  }
};
