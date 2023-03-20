import actionTypes from "./actionTypes";
import api from "../../api";

export const getloginAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.LOGIN.LOGIN,
      payload,
    });
    const response = await api.getDogImage();
    if (response.status === "success") {
      dispatch({
        type: actionTypes.LOGIN.SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN.ERROR,
        payload: response,
      });
    }
  };
};
export const logoutAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.LOGIN.LOGOUT,
      payload,
    });
  };
};
export const checkvalidateAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.LOGIN.CHECK_VALIDATE,
      payload,
    });
  };
};
