const initialState = { name: "" };

const nameInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME_INPUT":
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
export default nameInputReducer;
