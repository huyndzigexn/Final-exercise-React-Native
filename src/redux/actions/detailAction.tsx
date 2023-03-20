import actionTypes from "./actionTypes";
import api from "../../api";

export const getdetailAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.DETAILS.UPDATE,
      payload,
    });
  };
};
export const getImageAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.DETAILS.LOAD_IMAGE,
      payload,
    });
  };
};
