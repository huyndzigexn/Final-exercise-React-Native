import { actionTypes } from "../actions";

const initialState = {
  arrImage: [
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
    { uri: "" },
  ],
  position: 0,
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (action.type) {
    case actionTypes.DETAILS.LOAD_IMAGE:
      const arrState = { ...state };
      console.log(payload.message);
      arrState.arrImage[arrState.position] = { uri: payload.message };
      return {
        ...state,
        position: state.position + 1,
      };
    case actionTypes.LOGIN.SUCCESS:
      let position = state.position;
      if (position < 9) {
        state.arrImage[position] = payload.message;
        state.position = state.position + 1;
      }
      return {
        ...state,
      };
    case actionTypes.LOGIN.ERROR:
      return {
        ...state,
        errorMessage: "An error occurred",
      };
    default:
      return state;
  }
}
