import { actionTypes } from "../actions";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialStateLogin = {
  dogImage: "",
  email: "",
  password: "",
  urlToken: "",
  errorMessage: "",
};

const loginReducer = (state = initialStateLogin, action: any) => {
  const { type, payload } = action;
  switch (action.type) {
    case actionTypes.LOGIN.LOGIN:
      state.errorMessage = "";
      const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
      if (validateEmail(payload.email)) {
        return {
          ...state,
          email: payload.email,
          password: payload.password,
        };
      } else {
        let err_mess = "Invalid email address, please re-enter!";
        return {
          ...state,
          errorMessage: err_mess,
        };
      }
    case actionTypes.LOGIN.CHECK_VALIDATE:
      state.errorMessage = "";
      let message_error =
        payload.email == ""
          ? "Please enter email address"
          : payload.password == ""
          ? "Please enter Password "
          : "";
      let err_mess =
        payload.email == "" && payload.password == ""
          ? "Please enter email address and password"
          : message_error;
      return {
        ...state,
        errorMessage: err_mess,
      };
    case actionTypes.LOGIN.UPDATE_TOKEN:
      return {
        ...state,
        urlToken: state.urlToken,
      };
    case actionTypes.LOGIN.SUCCESS:
      AsyncStorage.setItem("storageImage", payload.message);
      return {
        ...state,
        urlToken: payload.message,
      };
    case actionTypes.LOGIN.ERROR:
      return {
        ...state,
        errorMessage: "An error occurred",
      };
    case actionTypes.LOGIN.LOGOUT:
      AsyncStorage.setItem("storageImage", "");
      return {
        ...state,
        urlToken: "",
        email: "",
        password: "",
      };
    default:
      return state;
  }
};
export default loginReducer;
