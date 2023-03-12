import actionTypes from "./actionTypes";

export const getDogImageRequestAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.REQUEST,
      payload,
    });

    const getDogImage = async () => {
      const responseRaw = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const responseJson = await responseRaw.json();
      return responseJson;
    };

    const response = await getDogImage();
    if (response?.status === "success") {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.SUCCESS,
        payload: response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_DOG_IMAGE.ERROR,
        payload: response,
      });
    }
  };
};

export const increaseAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.INCREASE,
      payload,
    });
  };
};

export const decreaseAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.DECREASE,
      payload,
    });
  };
};

export const loginAction = (username: any, password: any) => {
  return {
    type: "LOGIN",
    payload: {
      name: username,
      pass: password,
    },
  };
};

export const caculateAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.CALCULATE,
      payload,
    });
  };
};

export const secondNumAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.SECONDNUM,
      payload,
    });
  };
};

export const enterAction = (dispatch: Function) => {
  return async (payload: any) => {
    dispatch({
      type: actionTypes.GET_DOG_IMAGE.ENTER,
      payload,
    });
  };
};