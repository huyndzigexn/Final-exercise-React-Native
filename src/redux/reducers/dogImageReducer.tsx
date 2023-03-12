import { actionTypes } from "../actions";

const initialState = {
  isFetching: false,
  dogImage: "",
  errorMessage: "",
  number: 0,
  username: "",
  password: "",
  fisrtNum: "",
  secondNum: "",
  operator: "",
  enter: "",
  hoverButton: false,
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  console.log("action", action);

  switch (action.type) {
    case actionTypes.GET_DOG_IMAGE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        dogImage: action.payload.message,
      };
    case actionTypes.GET_DOG_IMAGE.ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: "An error occurred",
      };
    case actionTypes.GET_DOG_IMAGE.LOGIN:
      return {
        ...state,
        username: payload.username,
        password: payload.password,
        // errorMessage: "An error occurred",
      };
    case actionTypes.GET_DOG_IMAGE.CALCULATE:
      console.log("payload", payload);
      let type = payload.type;
      let value = payload.value;
      if (type == "number") {
        if (state.operator != "") {
          state.secondNum = state.secondNum + value;
          state.enter = state.secondNum;
        } else {
          state.fisrtNum = state.fisrtNum + value;
          state.enter = state.fisrtNum;
        }
      }

      if (type === "operator") {
        state.enter = "";
        if (state.fisrtNum != "" && state.secondNum != "") {
          let total = eval(state.fisrtNum + state.operator + state.secondNum);
          state.enter = total;
          state.secondNum = "";
          state.fisrtNum = total;
        }

        if (state.fisrtNum == "" && value == "-") {
          state.fisrtNum = value;
          state.enter = state.fisrtNum;
          state.operator = "";
        }

        state.operator = value;
      }
      if (type === "equal") {
        state.enter = eval(state.fisrtNum + state.operator + state.secondNum);
        console.log(state);
      }
      if (type === "clear") {
        state.enter = "";
        state.fisrtNum = "";
        state.secondNum = "";
        state.operator = "";
      }
      if (
        type === "posneg" &&
        (state.fisrtNum != "" || state.secondNum != "")
      ) {
        if (state.secondNum == "") {
          state.enter = String(parseFloat(state.enter) * -1);
          state.fisrtNum = state.enter;
        } else {
          state.enter = String(parseFloat(state.enter) * -1);
          state.secondNum = state.enter;
        }
      }

      if (type === "percent") {
        state.enter = String(parseFloat(state.enter) * 0.01);
      }
      return { ...state };
    case actionTypes.GET_DOG_IMAGE.SECONDNUM:
      return {
        ...state,
        secondNum: payload,
      };
    case actionTypes.GET_DOG_IMAGE.ENTER:
      return {
        ...state,
        enter: payload.enter,
      };
    default:
      return state;
  }
}
